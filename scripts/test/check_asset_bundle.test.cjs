const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { checkBundle, checkContent, createAssetGuard, stripCopiedAssets } = require('../check_asset_bundle.cjs');

test('rejects raw, base64, escaped SVG, inline CSS, and source-map artwork', () => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg"><path fill="currentColor"/></svg>';
  for (const content of [`export const svg=${JSON.stringify(svg)}`, `export const svg="${Buffer.from(svg).toString('base64')}"`, 'export const svg="\\x3csvg viewBox=\\"0 0 24 24\\">"']) {
    assert.throws(() => checkContent(content, 'chunk.js'));
  }
  assert.throws(() => checkContent('body{background:url(data:image/png;base64,example)}', 'style.css'));
  assert.throws(() => checkContent(JSON.stringify({ sources: ['assets_icons.json'], sourcesContent: [] }), 'chunk.js.map'));
  assert.throws(() => checkContent(JSON.stringify({ sources: ['icon.ts'], sourcesContent: [`export const svg=${JSON.stringify(svg)}`] }), 'chunk.js.map'));
  assert.doesNotThrow(() => checkContent('export const assets={close:"icons/close-outline.svg"};', 'chunk.js'));
  assert.doesNotThrow(() => checkContent('/* SVG properties might not work in <svg> */ export const value=1;', 'runtime.js'));
});

test('rejects asset catalog modules in the actual Rollup graph', () => {
  const guard = createAssetGuard();
  assert.throws(() => guard.generateBundle.call({ getModuleIds: () => ['node_modules/blip-tokens/build/json/assets_icons.json'], error: message => { throw new Error(message); } }));
  assert.doesNotThrow(() => guard.generateBundle.call({ getModuleIds: () => ['src/utils/asset-config.json'], error: message => { throw new Error(message); } }));
});

test('strips Stencil copied source assets and rejects any other published artwork', context => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'asset-bundle-test-'));
  context.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  fs.mkdirSync(path.join(directory, 'collection/assets'), { recursive: true });
  fs.writeFileSync(path.join(directory, 'collection/assets/spinner.svg'), '<svg/>');
  fs.writeFileSync(path.join(directory, 'chunk.js'), 'export const value=1;');
  assert.throws(() => checkBundle(directory), /Copied artwork/);
  stripCopiedAssets(directory);
  assert.doesNotThrow(() => checkBundle(directory));
  fs.writeFileSync(path.join(directory, 'image.png'), 'image');
  assert.throws(() => checkBundle(directory), /Copied artwork/);
});