import { r as registerInstance, h, H as Host } from './index-D799VfbI.js';
import { l as loadAssetSvg } from './asset-loader-BG87Jd1l.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';
import { a as getLogoName } from './utils-CsjvLMMV.js';
import './asset-config-DjyCVRUn.js';

const uaiLogoCss = () => `:host{display:inline-block;vertical-align:middle}.asset{display:block}.asset svg{display:block;width:100%;height:auto}`;

const UaiLogo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.requestVersion = 0;
        /**
         * Accessible name for a meaningful logo. Without it, the logo is decorative.
         */
        this.ariaLabel = null;
    }
    connectedCallback() {
        this.loadLogo();
    }
    disconnectedCallback() {
        this.requestVersion++;
    }
    loadLogo() {
        const version = ++this.requestVersion;
        if (!this.name) {
            this.svgContent = undefined;
            return;
        }
        this.svgContent = undefined;
        Promise.resolve()
            .then(() => loadAssetSvg(getLogoName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            warnOnce('uai-logo', `load:${this.name}`, `Failed to load logo "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (h(Host, { key: '33ab1881657759101eae129179bc2167edfd5f39', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '9cf055a4e10654e2bd6f053eaa5734dcca5570b6', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadLogo": 0
            }]
    }; }
};
UaiLogo.style = uaiLogoCss();

export { UaiLogo as uai_logo };
