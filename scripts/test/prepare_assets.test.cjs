const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { pathToFileURL } = require('node:url');
const { prepareAssets } = require('../prepare_assets.cjs');

function fixture(context) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'ds-asset-config-'));
  context.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const manifestPath = path.join(directory, 'build/assets/v1/manifest.json');
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(path.join(directory, 'package.json'), JSON.stringify({ version: '1.2.3' }));
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"/>');
  const assets = {};
  for (const family of ['icons', 'emojis', 'logos', 'illustrations', 'components']) assets[family] = { path: `${family}/test.svg`, bytes: svg.length, sha256: createHash('sha256').update(svg).digest('hex') };
  const manifest = { schemaVersion: 1, version: '1.2.3', baseUrl: 'https://assets.example.com/blip-tokens/', assets };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest));
  return { manifestPath, outputPath: path.join(directory, 'config.json'), manifest, svg };
}

test('generates only exact-version paths and ignores runtime cluster or root overrides', async context => {
  const input = fixture(context);
  await prepareAssets({ ...input, env: { CDN_ASSETS_CDN_URL: 'https://other.example.com/' } });
  const config = JSON.parse(fs.readFileSync(input.outputPath));
  assert.equal(config.assetRoot, 'https://assets.example.com/blip-tokens/1.2.3/');
  assert.equal(config.assets.icons, 'icons/test.svg');
  assert.equal(JSON.stringify(config).includes('<svg'), false);
});

test('installed tokens resolve every public icon and required component asset offline without legacy catalogs', async context => {
  const input = fixture(context);
  const manifestPath = require.resolve('blip-tokens/assets/manifest');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const tokenPackage = path.resolve(path.dirname(manifestPath), '../../../package.json');
  fs.writeFileSync(input.manifestPath, JSON.stringify(manifest));
  fs.copyFileSync(tokenPackage, path.resolve(path.dirname(input.manifestPath), '../../../package.json'));
  await prepareAssets({ ...input, env: { CI: 'true' }, fetchImpl: () => { throw new Error('Asset preparation must remain offline'); } });
  const config = JSON.parse(fs.readFileSync(input.outputPath, 'utf8'));
  const { OutlineIcons, SolidIcons } = await import(pathToFileURL(require.resolve('blip-tokens/icons')).href);
  assert.ok(OutlineIcons.length > 0);
  assert.ok(SolidIcons.length > 0);
  const requiredKeys = [
    ...OutlineIcons.map(name => `asset-icon-${name}-outline`),
    ...SolidIcons.map(name => `asset-icon-${name}-solid`),
    'illustration/default/accessibility-1',
    'asset-component-loading-page',
    'asset-component-loading-spinner-extra-small',
    'asset-component-loading-spinner-small',
    'asset-component-loading-spinner-standard',
    'asset-component-upload-pattern',
  ];
  for (const key of requiredKeys) {
    assert.ok(config.assets[key], `Missing manifest entry used by blip-ds: ${key}`);
    const url = new URL(config.assets[key], config.assetRoot);
    assert.equal(url.protocol, 'https:');
    assert.ok(url.href.startsWith(config.assetRoot));
  }
  assert.equal(Object.keys(config.assets).length, Object.keys(manifest.assets).length);
  assert.equal(fs.existsSync(path.resolve(path.dirname(input.manifestPath), '../../json/variables.json')), false);
  assert.equal(fs.existsSync(path.resolve(path.dirname(input.manifestPath), '../../json/assets_icons.json')), false);
});

test('rejects release version mismatches and version or asset path traversal', async context => {
  for (const mutate of [manifest => { manifest.version = '1.2.4'; }, manifest => { manifest.version = '../unsafe'; }, manifest => { manifest.assets.icons.path = '../icon.svg'; }]) {
    const input = fixture(context);
    mutate(input.manifest);
    fs.writeFileSync(input.manifestPath, JSON.stringify(input.manifest));
    await assert.rejects(() => prepareAssets({ ...input, env: {} }));
    assert.equal(fs.existsSync(input.outputPath), false);
  }
});

test('uses the standard CDN root and branch version for locally built development tokens', async context => {
  const input = fixture(context);
  fs.writeFileSync(path.resolve(path.dirname(input.manifestPath), '../../../package.json'), JSON.stringify({ version: '0.0.0-development' }));
  input.manifest.version = 'feature-cdn-assets';
  input.manifest.baseUrl = null;
  fs.writeFileSync(input.manifestPath, JSON.stringify(input.manifest));
  await prepareAssets({ ...input, fetchImpl: () => { throw new Error('Must not fetch CDN during build'); } });
  assert.equal(JSON.parse(fs.readFileSync(input.outputPath)).assetRoot, 'https://cdn.blip.ai/blip-tokens/feature-cdn-assets/');
});

test('CI prepares release URLs offline and refuses network verification', async context => {
  const input = fixture(context);
  const fetchImpl = () => { throw new Error('Must not fetch CDN during CI'); };
  await prepareAssets({ ...input, env: { CI: 'true' }, fetchImpl });
  assert.equal(JSON.parse(fs.readFileSync(input.outputPath)).assetRoot, 'https://assets.example.com/blip-tokens/1.2.3/');
  await assert.rejects(() => prepareAssets({ ...input, verify: true, env: { CI: 'true' }, fetchImpl }), /outside CI/);
});

test('verifies CDN manifest and every asset family before writing config', async context => {
  const input = fixture(context);
  const requests = [];
  await prepareAssets({ ...input, verify: true, env: {}, fetchImpl: async (url, options) => {
    requests.push({ url: url.href, options });
    const manifest = url.pathname.endsWith('manifest.json');
    return new Response(manifest ? JSON.stringify(input.manifest) : input.svg, { headers: { 'content-type': manifest ? 'application/json' : 'image/svg+xml', 'cache-control': 'public, max-age=31536000, immutable', 'access-control-allow-origin': '*' } });
  } });
  assert.equal(requests.length, 6);
  assert.equal(requests.every(request => request.options.redirect === 'error'), true);
  assert.equal(fs.existsSync(input.outputPath), true);
});

test('CDN failures block config creation', async context => {
  const input = fixture(context);
  await assert.rejects(() => prepareAssets({ ...input, verify: true, env: {}, fetchImpl: async () => new Response('wrong', { headers: { 'content-type': 'text/html' } }) }), /CDN manifest/);
  assert.equal(fs.existsSync(input.outputPath), false);
});

test('CI workflows use locked tokens and never fetch public CDN assets', () => {
  for (const name of ['test', 'publish', 'pr-storybook', 'playwright']) {
    const workflow = fs.readFileSync(path.resolve(__dirname, `../../.github/workflows/${name}.yml`), 'utf8');
    assert.ok(workflow.includes('npm ci --legacy-peer-deps'));
    assert.ok(workflow.includes('npm run assets:prepare') || workflow.includes('npm run build'));
    assert.ok(!/assets:verify|assets:update-tokens/.test(workflow));
  }
});