'use strict';

var index = require('./index-JW9Yq-qX.js');
var assetLoader = require('./asset-loader-CO6wtD2Y.js');
var deprecation = require('./deprecation-DQqFZBv-.js');
var utils = require('./utils-Glf6a2vm.js');
require('./asset-config-CKVSo2i2.js');

const uaiEmojiCss = () => `:host{display:inline-block;vertical-align:middle}.asset{display:block}.asset svg{display:block;width:100%;height:auto}`;

const UaiEmoji = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            .then(() => assetLoader.loadAssetSvg(utils.getEmojiName(this.name)))
            .then((svg) => {
            if (version === this.requestVersion)
                this.svgContent = svg;
        })
            .catch(() => {
            if (version !== this.requestVersion)
                return;
            this.svgContent = undefined;
            deprecation.warnOnce('uai-emoji', `load:${this.name}`, `Failed to load emoji "${this.name}" from blip-tokens.`);
        });
    }
    render() {
        return (index.h(index.Host, { key: 'c89115fddb5b5a84ff798664dfb8bc4de071d380', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, index.h("div", { key: '0b946aa510b2d334aa3ee3f69d510ba3ac897fe4', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadEmoji": 0
            }]
    }; }
};
UaiEmoji.style = uaiEmojiCss();

exports.uai_emoji = UaiEmoji;
