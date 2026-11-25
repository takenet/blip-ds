import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';
import { l as loadAssetSvg } from './asset-loader-BG87Jd1l.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';
import { g as getEmojiName } from './utils-CvIXtGRR.js';
import './asset-config-DjyCVRUn.js';

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
        return (h(Host, { key: '7f630b6e73f21c06b3b465efbf8fe41b794e1062', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '32b0b9ca92fa0e67b2ba46a3b2857396f2e3aa35', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadEmoji": 0
            }]
    }; }
};
UaiEmoji.style = uaiEmojiCss();

export { UaiEmoji as uai_emoji };
