import config from "./asset-config.json";
const assets = config.assets;
const pending = new Map();
const cache = new Map();
const maximumCachedAssets = 256;
export function getAssetUrl(key) {
    const assetPath = assets[key];
    if (!assetPath)
        throw new Error(`Unknown design asset: ${key}`);
    return new URL(assetPath, config.assetRoot).href;
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
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
    const timeout = controller ? setTimeout(() => controller.abort(), 15000) : undefined;
    const request = fetch(url, Object.assign({ credentials: 'omit', mode: 'cors' }, (controller ? { signal: controller.signal } : {})))
        .then(async (response) => {
        var _a, _b, _c, _d;
        if (!response.ok || !((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('image/svg+xml')))
            throw new Error(`Failed to fetch SVG: ${key}`);
        const content = await response.text();
        const document = new DOMParser().parseFromString(content, 'image/svg+xml');
        const rootName = ((_b = document.documentElement) === null || _b === void 0 ? void 0 : _b.localName) || ((_d = (_c = document.documentElement) === null || _c === void 0 ? void 0 : _c.tagName) === null || _d === void 0 ? void 0 : _d.toLowerCase());
        if (rootName !== 'svg' || document.getElementsByTagName('parsererror').length)
            throw new Error(`Invalid SVG: ${key}`);
        cache.set(url, content);
        if (cache.size > maximumCachedAssets)
            cache.delete(cache.keys().next().value);
        return content;
    })
        .finally(() => {
        if (timeout !== undefined)
            clearTimeout(timeout);
        pending.delete(url);
    });
    pending.set(url, request);
    return request;
}
//# sourceMappingURL=asset-loader.js.map
