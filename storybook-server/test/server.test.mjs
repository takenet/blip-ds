import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createApp } from '../server.mjs';

test('serves only read-only documentation tools from local manifests', async context => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'blip-ds-mcp-'));
  context.after(() => rm(directory, { recursive: true, force: true }));
  await mkdir(path.join(directory, 'manifests'));
  await writeFile(path.join(directory, 'index.html'), '<html>Blip DS</html>');
  await writeFile(path.join(directory, 'manifests/components.json'), JSON.stringify({
    v: 0,
    components: {
      'components-button': {
        id: 'components-button', name: 'Button', path: 'src/button.stories.jsx',
        stories: [{ id: 'components-button--primary', name: 'Primary', snippet: '<bds-button>Confirmar</bds-button>' }],
      },
    },
  }));
  const app = await createApp({ directory, publicOrigin: 'https://ds.blip.tools', version: '2.0.0-rc.1' });
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' };
  async function rpc(method, params = {}) {
    const response = await app.request('https://ds.blip.tools/mcp', {
      method: 'POST', headers, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
    });
    assert.equal(response.status, 200);
    const text = await response.text();
    const eventData = text.split('\n').find(line => line.startsWith('data:'));
    return JSON.parse(eventData ? eventData.slice(5) : text);
  }
  const initialized = await rpc('initialize', {
    protocolVersion: '2025-03-26', capabilities: {}, clientInfo: { name: 'test', version: '1' },
  });
  assert.ok(initialized.result.serverInfo);
  const tools = await rpc('tools/list');
  assert.ok(tools.result.tools.length > 0);
  assert.ok(tools.result.tools.every(tool => tool.name.startsWith('docs-')));
  const listing = await rpc('tools/call', { name: 'docs-list', arguments: {} });
  assert.notEqual(listing.result.isError, true);
  assert.match(JSON.stringify(listing.result), /Button/);
  const detail = await rpc('tools/call', { name: 'docs-show', arguments: { id: 'components-button' } });
  assert.notEqual(detail.result.isError, true);
  assert.match(JSON.stringify(detail.result), /bds-button/);
  const denied = await app.request('https://ds.blip.tools/mcp', { method: 'POST', headers: { ...headers, Origin: 'https://untrusted.example' } });
  assert.equal(denied.status, 403);
  const wrongHost = await app.request('https://attacker.example/mcp', { method: 'POST', headers });
  assert.equal(wrongHost.status, 403);
  const tooLarge = await app.request('https://ds.blip.tools/mcp', { method: 'POST', headers, body: 'x'.repeat(65 * 1024) });
  assert.equal(tooLarge.status, 413);
  assert.equal((await app.request('/server.mjs')).status, 404);
  assert.equal((await app.request('/healthz')).status, 200);
  assert.equal((await app.request('/release.json')).headers.get('Cache-Control'), 'no-store');
  assert.equal(await (await app.request('/')).text(), '<html>Blip DS</html>');
});