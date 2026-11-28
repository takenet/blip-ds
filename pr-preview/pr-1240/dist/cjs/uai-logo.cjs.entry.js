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
        return (index.h(index.Host, { key: '719458c7bc5fe9f9825b84c72f4585c048f91b1b', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, index.h("div", { key: 'bfbc4ede5ede1155a413c26907c8d56fbdc51373', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadLogo": 0
            }]
    }; }
};
UaiLogo.style = uaiLogoCss();

exports.uai_logo = UaiLogo;
