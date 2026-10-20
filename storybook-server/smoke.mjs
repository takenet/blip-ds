import assert from 'node:assert/strict';
import { createApp } from './server.mjs';

const app = await createApp({
  directory: process.argv[2] || 'storybook-static',
  publicOrigin: 'https://ds.blip.tools',
});
async function rpc(method, params = {}) {
  const response = await app.request('https://ds.blip.tools/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  assert.equal(response.status, 200);
  const text = await response.text();
  const eventData = text.split('\n').find(line => line.startsWith('data:'));
  const result = JSON.parse(eventData ? eventData.slice(5) : text);
  assert.equal(result.error, undefined);
  assert.notEqual(result.result?.isError, true, JSON.stringify(result.result));
  return result.result;
}

await rpc('initialize', { protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'release-check', version: '1' } });
const tools = await rpc('tools/list');
assert.deepEqual(tools.tools.map(tool => tool.name).sort(), ['docs-list', 'docs-show', 'docs-show-story']);
assert.match(JSON.stringify(await rpc('tools/call', { name: 'docs-list', arguments: {} })), /Button/);
const documentation = await rpc('tools/call', { name: 'docs-show', arguments: { id: 'components-button' } });
assert.match(JSON.stringify(documentation), /fullWidth/);
assert.match(JSON.stringify(documentation), /bdsClick/);
const story = await rpc('tools/call', { name: 'docs-show-story', arguments: { storyId: 'components-button--properties' } });
assert.match(JSON.stringify(story), /bds-button/);
assert.equal((await app.request('/')).status, 200);
assert.equal((await app.request('/index.json')).status, 200);
console.log('Production Storybook and MCP smoke check passed.');