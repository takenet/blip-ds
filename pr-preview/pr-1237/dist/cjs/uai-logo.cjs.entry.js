'use strict';

var index = require('./index-GTJCA4wH.js');
var assetLoader = require('./asset-loader-CO6wtD2Y.js');
var deprecation = require('./deprecation-DQqFZBv-.js');
var utils = require('./utils-DJUziBnK.js');
require('./asset-config-CKVSo2i2.js');

const uaiLogoCss = () => `:host{display:inline-block;vertical-align:middle}.asset{display:block}.asset svg{display:block;width:100%;height:auto}`;

const UaiLogo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            .then(() => assetLoader.loadAssetSvg(utils.getLogoName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            deprecation.warnOnce('uai-logo', `load:${this.name}`, `Failed to load logo "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (index.h(index.Host, { key: 'd166d572a18bae3f84ce8a10b11b29c4dffd1522', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, index.h("div", { key: 'f22a8c76abcd74ca95f85d3f8f01e90f4f97c528', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadLogo": 0
            }]
    }; }
};
UaiLogo.style = uaiLogoCss();

exports.uai_logo = UaiLogo;
