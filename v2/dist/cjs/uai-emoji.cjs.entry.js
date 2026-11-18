'use strict';

var index = require('./index-Bq8uwDLK.js');
var assetLoader = require('./asset-loader-C39uBW9U.js');
var deprecation = require('./deprecation-DQqFZBv-.js');
var utils = require('./utils-BRdVvopb.js');
require('./asset-config-BPl0Q5dr.js');

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
        return (index.h(index.Host, { key: 'a952a547ad3492123e3bc3e4ecd1514eb99b3094', role: this.ariaLabel ? 'img' : undefined, "aria-label": this.ariaLabel, "aria-hidden": this.ariaLabel ? undefined : 'true' }, index.h("div", { key: 'a53211ff26e153cae4fc1951195ec7c78aa134ad', class: "asset", part: "asset", innerHTML: this.svgContent, "data-test": this.dataTest })));
    }
    static get watchers() { return {
        "name": [{
                "loadEmoji": 0
            }]
    }; }
};
UaiEmoji.style = uaiEmojiCss();

exports.uai_emoji = UaiEmoji;
