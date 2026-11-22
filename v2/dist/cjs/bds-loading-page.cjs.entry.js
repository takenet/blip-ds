'use strict';

var index = require('./index-GTJCA4wH.js');
var assetLoader = require('./asset-loader-CO6wtD2Y.js');
require('./asset-config-CKVSo2i2.js');

const loadingPageCss = () => `:host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, rgb(20, 20, 20));opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:90px;height:90px;color:var(--color-surface-1, rgb(246, 246, 246))}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}`;

const BdsLoading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to transform the svg in a div element. */
        this.formatSvg = (svgContent) => {
            const div = document.createElement(index.transformTag('div'));
            div.innerHTML = svgContent;
            const svgElm = div.firstElementChild;
            svgElm.removeAttribute('width');
            svgElm.removeAttribute('height');
            return div.innerHTML;
        };
        this.setSvgContent = async () => {
            try {
                const svg = await assetLoader.loadAssetSvg('asset-component-loading-page');
                this.svgContent = this.formatSvg(svg);
            }
            catch (_a) {
                this.svgContent = undefined;
            }
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (index.h(index.Host, { key: 'd31b3ce732a1b3294c36b58bce904b00b916dd07' }, index.h("div", { key: 'bba74e853a21a7d344c0a4a868b02d638857f120', class: "loading-container", "data-test": this.dataTest }, index.h("div", { key: '83bd24318f6a3ba0867fb832a2eb647e5178176b', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
};
BdsLoading.style = loadingPageCss();

exports.bds_loading_page = BdsLoading;
