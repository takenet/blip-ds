'use strict';

var index = require('./index-BqjYThoc.js');
var assetLoader = require('./asset-loader-7VlbCeFu.js');

const loadingSpinnerCss = () => `:host{display:block}.spinner_container{display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.spinner_background{border-radius:50%;border:2px solid}.spinner_background_extra-small{border-width:2px;width:16px;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_small{border-width:4px;width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_standard{border-width:8px;width:64px;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_main{border-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.spinner_background_light{border-color:var(--color-content-bright, rgb(255, 255, 255));opacity:0.16}.spinner_background_content{border-color:var(--color-surface-0, rgb(255, 255, 255));opacity:0.16}.spinner_background_positive{border-color:var(--color-positive, #10603b);opacity:0.16}.spinner_background_negative{border-color:var(--color-negative, #e60f0f);opacity:0.16}.spinner_loading{-webkit-animation:rotate 0.5s linear infinite;animation:rotate 0.5s linear infinite;position:absolute}.spinner_loading_extra-small{width:16px;height:16px}.spinner_loading_small{width:32px;height:32px}.spinner_loading_standard{width:64px;height:64px}.spinner_loading_main{color:var(--color-primary, rgb(30, 107, 241))}.spinner_loading_light{color:var(--color-content-bright, rgb(255, 255, 255))}.spinner_loading_content{color:var(--color-surface-0, rgb(255, 255, 255))}.spinner_loading_positive{color:var(--color-positive, #10603b)}.spinner_loading_negative{color:var(--color-negative, #e60f0f)}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}`;

const BdsLoadingSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.requestVersion = 0;
        /**
         * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
         */
        this.variant = 'primary';
        /**
         * Size, Entered as one of the size. Can be one of:
         * 'small', 'standard', 'large'.
         */
        this.size = 'standard';
        /**
         * Color, Entered as one of the color. Can be one of:
         * 'default', 'white'.
         */
        this.color = 'main';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to transform the svg in a div element. */
        this.formatSvg = (svgContent) => {
            const div = document.createElement('div');
            div.innerHTML = svgContent;
            const svgElm = div.firstElementChild;
            svgElm.removeAttribute('width');
            svgElm.removeAttribute('height');
            return div.innerHTML;
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    async setSvgContent() {
        const version = ++this.requestVersion;
        try {
            const svg = await assetLoader.loadAssetSvg(`asset-component-loading-spinner-${this.size}`);
            if (version === this.requestVersion)
                this.svgContent = this.formatSvg(svg);
        }
        catch (_a) {
            if (version === this.requestVersion)
                this.svgContent = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'df0db60c7f6c8b924aed85e3d8799da9bbb922c9' }, index.h("div", { key: '675a8d2cb30efbc3d2d7bcbb3da1ad67586921f8', class: {
                spinner_container: true,
                [`spinner_background_${this.size}`]: true,
            }, "data-test": this.dataTest }, index.h("div", { key: 'd53ff0a9fae8da75e3b8e56e9712f4b251aeef23', class: {
                spinner_background: true,
                [`spinner_background_${this.size}`]: true,
                [`spinner_background_${this.color}`]: true,
            } }), index.h("div", { key: 'cf636da92299f13b5d60b29347536aa4f00b3c5e', class: {
                spinner_loading: true,
                [`spinner_loading_${this.size}`]: true,
                [`spinner_loading_${this.color}`]: true,
            }, innerHTML: this.svgContent }))));
    }
    static get watchers() { return {
        "size": [{
                "setSvgContent": 0
            }]
    }; }
};
BdsLoadingSpinner.style = loadingSpinnerCss();

exports.bds_loading_spinner = BdsLoadingSpinner;
