import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';
import { l as loadAssetSvg } from './asset-loader-4TTmk6ec.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';
import { a as getLogoName } from './utils-i0ANWvuJ.js';

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
        return (h(Host, { key: '28d0a47d76d974468e18fe126a07699a55472fb2', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, h("div", { key: '9436a95674b371dcf6754efa19dceb8ede241b6c', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadLogo": 0
            }]
    }; }
};
UaiLogo.style = uaiLogoCss();

export { UaiLogo as uai_logo };
