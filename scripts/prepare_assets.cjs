const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

async function prepareAssets({ verify = false, manifestPath, outputPath = path.resolve(__dirname, '../src/utils/asset-config.json'), fetchImpl = fetch, env = process.env } = {}) {
  let filename;
  try {
    filename = manifestPath || require.resolve('blip-tokens/assets/manifest');
  } catch {
    throw new Error('Install the blip-tokens release with the external asset manifest before building blip-ds.');
  }
  const manifest = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const tokenPackage = JSON.parse(fs.readFileSync(path.resolve(path.dirname(filename), '../../../package.json'), 'utf8'));
  const development = tokenPackage.version === '0.0.0-development';
  if (manifest.schemaVersion !== 1 || (!development && manifest.version !== tokenPackage.version) || !/^[A-Za-z0-9][A-Za-z0-9._+-]*$/.test(manifest.version || '') || !Object.keys(manifest.assets || {}).length) {
    throw new Error('Invalid token manifest or mismatched exact version.');
  }
  const baseUrl = manifest.baseUrl || 'https://cdn.blip.ai/blip-tokens/';
  const root = new URL(baseUrl);
  if (root.protocol !== 'https:' || root.username || root.password || root.search || root.hash || !root.pathname.endsWith('/')) {
    throw new Error('Invalid global asset CDN root.');
  }
  const assetRoot = new URL(`${manifest.version}/`, root).href;
  const assets = {};
  for (const [key, asset] of Object.entries(manifest.assets)) {
    if (!/^[a-zA-Z0-9_./-]+\.svg$/.test(asset.path) || asset.path.split('/').some(segment => !segment || segment === '.' || segment === '..')) {
      throw new Error(`Unsafe asset path: ${key}`);
    }
    assets[key] = asset.path;
  }
  if (verify) {
    if ((env.CI && env.CI !== 'false') || env.GITHUB_ACTIONS === 'true') throw new Error('CDN verification must run outside CI. CI builds use the installed manifest without fetching public assets.');
    const response = await fetchImpl(new URL('manifest.json', assetRoot), { signal: AbortSignal.timeout(15000), redirect: 'error', headers: { Origin: 'https://cdn-assets-check.invalid' } });
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json') || !response.headers.get('cache-control')?.includes('immutable') || response.headers.get('access-control-allow-origin') !== '*' || JSON.stringify(await response.json()) !== JSON.stringify(manifest)) throw new Error('Published CDN manifest does not match installed tokens.');
    for (const family of ['icons/', 'emojis/', 'logos/', 'illustrations/', 'components/']) {
      const asset = Object.values(manifest.assets).find(entry => entry.path.startsWith(family));
      if (!asset) throw new Error(`Missing asset family: ${family}`);
      const result = await fetchImpl(new URL(asset.path, assetRoot), { signal: AbortSignal.timeout(15000), redirect: 'error', headers: { Origin: 'https://cdn-assets-check.invalid' } });
      const bytes = Buffer.from(await result.arrayBuffer());
      if (!result.ok || !result.headers.get('content-type')?.includes('image/svg+xml') || !result.headers.get('cache-control')?.includes('immutable') || result.headers.get('access-control-allow-origin') !== '*' || bytes.length !== asset.bytes || crypto.createHash('sha256').update(bytes).digest('hex') !== asset.sha256) {
        throw new Error(`CDN asset readiness failed: ${asset.path}`);
      }
    }
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify({ assetRoot, version: manifest.version, assets })}\n`);
  console.log(`Prepared ${Object.keys(assets).length} asset paths for blip-tokens@${manifest.version}.`);
}

if (require.main === module) prepareAssets({ verify: process.argv.includes('--verify') }).catch(error => { console.error(error.message); process.exitCode = 1; });

module.exports = { prepareAssets };