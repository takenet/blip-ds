import config from './asset-config.json';

const assets: Record<string, string> = config.assets;
const pending = new Map<string, Promise<string>>();
const cache = new Map<string, string>();
const maximumCachedAssets = 256;

export function getAssetUrl(key: string): string {
  const assetPath = assets[key];
  if (!assetPath) throw new Error(`Unknown design asset: ${key}`);
  return new URL(assetPath, config.assetRoot).href;
}

export function loadAssetSvg(key: string): Promise<string> {
  const url = getAssetUrl(key);
  if (cache.has(url)) {
    const svg = cache.get(url);
    cache.delete(url);
    cache.set(url, svg);
    return Promise.resolve(svg);
  }
  if (pending.has(url)) return pending.get(url);
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
  const timeout = controller ? setTimeout(() => controller.abort(), 15000) : undefined;
  const request = fetch(url, { credentials: 'omit', mode: 'cors', ...(controller ? { signal: controller.signal } : {}) })
    .then(async response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('image/svg+xml')) throw new Error(`Failed to fetch SVG: ${key}`);
      const content = await response.text();
      const document = new DOMParser().parseFromString(content, 'image/svg+xml');
      const rootName = document.documentElement?.localName || document.documentElement?.tagName?.toLowerCase();
      if (rootName !== 'svg' || document.getElementsByTagName('parsererror').length) throw new Error(`Invalid SVG: ${key}`);
      cache.set(url, content);
      if (cache.size > maximumCachedAssets) cache.delete(cache.keys().next().value);
      return content;
    })
    .finally(() => {
      if (timeout !== undefined) clearTimeout(timeout);
      pending.delete(url);
    });
  pending.set(url, request);
  return request;
}