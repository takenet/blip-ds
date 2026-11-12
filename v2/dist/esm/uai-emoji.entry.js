import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';
import { l as loadAssetSvg } from './asset-loader-ByPjkgw2.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';
import { g as getEmojiName } from './utils-i0ANWvuJ.js';

const uaiEmojiCss = () => `:host{display:inline-block;vertical-align:middle}.asset{display:block}.asset svg{display:block;width:100%;height:auto}`;

const UaiEmoji = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.requestVersion = 0;
        /**
         * Accessible name for a meaningful emoji. Without it, the emoji is decorative.
         */
        this.ariaLabel = null;
    }
    connectedCallback() {
        this.loadEmoji();
    }
    disconnectedCallback() {
        this.requestVersion++;
    }
    loadEmoji() {
        const version = ++this.requestVersion;
        if (!this.name) {
            this.svgContent = undefined;
            return;
        }
        this.svgContent = undefined;
        Promise.resolve()
            .then(() => loadAssetSvg(getEmojiName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            warnOnce('uai-emoji', `load:${this.name}`, `Failed to load emoji "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (h(Host, { key: '8f1f8cf95cc7adb5442e5f7fb1b88f98a998fbbf', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '47eeab40eac2bbf48715c62983d27df2ee223c61', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadEmoji": 0
            }]
    }; }
};
UaiEmoji.style = uaiEmojiCss();

export { UaiEmoji as uai_emoji };
