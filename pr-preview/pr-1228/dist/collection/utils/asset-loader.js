import config from "./asset-config.json";
const assets = config.assets;
const pending = new Map();
const cache = new Map();
const maximumCachedAssets = 256;
const requestTimeoutMs = 15000;
const maximumAttempts = 3;
const retryDelayMs = 300;
// A response that arrived but is not a valid SVG will not get better by asking again.
function permanentError(message) {
    const error = new Error(message);
    error.permanent = true;
    return error;
}
export function getAssetUrl(key) {
    const assetPath = assets[key];
    if (!assetPath)
        throw new Error(`Unknown design asset: ${key}`);
    return new URL(assetPath, config.assetRoot).href;
}
function fetchSvg(key, url) {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
    let timedOut = false;
    const timeout = controller
        ? setTimeout(() => {
            timedOut = true;
            controller.abort();
        }, requestTimeoutMs)
        : undefined;
    return fetch(url, Object.assign({ credentials: 'omit', mode: 'cors' }, (controller ? { signal: controller.signal } : {})))
        .then(async (response) => {
        var _a, _b, _c, _d;
        if (!response.ok || !((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('image/svg+xml')))
            throw permanentError(`Failed to fetch SVG: ${key}`);
        const content = await response.text();
        const document = new DOMParser().parseFromString(content, 'image/svg+xml');
        const rootName = ((_b = document.documentElement) === null || _b === void 0 ? void 0 : _b.localName) || ((_d = (_c = document.documentElement) === null || _c === void 0 ? void 0 : _c.tagName) === null || _d === void 0 ? void 0 : _d.toLowerCase());
        if (rootName !== 'svg' || document.getElementsByTagName('parsererror').length)
            throw permanentError(`Invalid SVG: ${key}`);
        return content;
    })
        .catch(error => {
        if (timedOut && (error === null || error === void 0 ? void 0 : error.name) === 'AbortError')
            throw new Error(`Timed out after ${requestTimeoutMs}ms loading SVG: ${key}`);
        throw error;
    })
        .finally(() => {
        if (timeout !== undefined)
            clearTimeout(timeout);
    });
}
// Timeouts and network errors are often transient (busy page, slow connection), so they get a few more attempts.
function fetchSvgWithRetry(key, url, attempt = 1) {
    return fetchSvg(key, url).catch((error) => {
        if (error.permanent || attempt >= maximumAttempts)
            throw error;
        return new Promise(resolve => setTimeout(resolve, retryDelayMs * attempt)).then(() => fetchSvgWithRetry(key, url, attempt + 1));
    });
}
export function loadAssetSvg(key) {
    const url = getAssetUrl(key);
    if (cache.has(url)) {
        const svg = cache.get(url);
        cache.delete(url);
        cache.set(url, svg);
        return Promise.resolve(svg);
    }
    if (pending.has(url))
        return pending.get(url);
    const request = fetchSvgWithRetry(key, url)
        .then(content => {
        cache.set(url, content);
        if (cache.size > maximumCachedAssets)
            cache.delete(cache.keys().next().value);
        return content;
    })
        .finally(() => {
        pending.delete(url);
    });
    pending.set(url, request);
    return request;
}
