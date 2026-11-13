import config from './asset-config.json';

const assets: Record<string, string> = config.assets;
const pending = new Map<string, Promise<string>>();
const cache = new Map<string, string>();
const maximumCachedAssets = 256;
const requestTimeoutMs = 15000;
const maximumAttempts = 3;
const retryDelayMs = 300;

type AssetError = Error & { permanent?: boolean };

// A response that arrived but is not a valid SVG will not get better by asking again.
function permanentError(message: string): AssetError {
  const error: AssetError = new Error(message);
  error.permanent = true;
  return error;
}

export function getAssetUrl(key: string): string {
  const assetPath = assets[key];
  if (!assetPath) throw new Error(`Unknown design asset: ${key}`);
  return new URL(assetPath, config.assetRoot).href;
}

function fetchSvg(key: string, url: string): Promise<string> {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
  let timedOut = false;
  const timeout = controller
    ? setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, requestTimeoutMs)
    : undefined;
  return fetch(url, { credentials: 'omit', mode: 'cors', ...(controller ? { signal: controller.signal } : {}) })
    .then(async response => {
      if (!response.ok || !response.headers.get('content-type')?.includes('image/svg+xml')) throw permanentError(`Failed to fetch SVG: ${key}`);
      const content = await response.text();
      const document = new DOMParser().parseFromString(content, 'image/svg+xml');
      const rootName = document.documentElement?.localName || document.documentElement?.tagName?.toLowerCase();
      if (rootName !== 'svg' || document.getElementsByTagName('parsererror').length) throw permanentError(`Invalid SVG: ${key}`);
      return content;
    })
    .catch(error => {
      if (timedOut && error?.name === 'AbortError') throw new Error(`Timed out after ${requestTimeoutMs}ms loading SVG: ${key}`);
      throw error;
    })
    .finally(() => {
      if (timeout !== undefined) clearTimeout(timeout);
    });
}

// Timeouts and network errors are often transient (busy page, slow connection), so they get a few more attempts.
function fetchSvgWithRetry(key: string, url: string, attempt = 1): Promise<string> {
  return fetchSvg(key, url).catch((error: AssetError) => {
    if (error.permanent || attempt >= maximumAttempts) throw error;
    return new Promise<void>(resolve => setTimeout(resolve, retryDelayMs * attempt)).then(() => fetchSvgWithRetry(key, url, attempt + 1));
  });
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
  const request = fetchSvgWithRetry(key, url)
    .then(content => {
      cache.set(url, content);
      if (cache.size > maximumCachedAssets) cache.delete(cache.keys().next().value);
      return content;
    })
    .finally(() => {
      pending.delete(url);
    });
  pending.set(url, request);
  return request;
}
