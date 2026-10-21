'use strict';

var index = require('./index-DQyYkciT.js');
var assetLoader = require('./asset-loader-CbLrcrjb.js');

const loadingPageCss = ":host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, rgb(20, 20, 20));opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:90px;height:90px;color:var(--color-surface-1, rgb(246, 246, 246))}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}";

const BdsLoading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '7a042cac4834149cff099a534cbfdba574ef3142' }, index.h("div", { key: '55a1566696bd5f4cad5d3ed2144bd35b29bbc685', class: "loading-container", "data-test": this.dataTest }, index.h("div", { key: '258bc7ed10b246183e8d83178cdab3fc2d515bb2', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
};
BdsLoading.style = loadingPageCss;

exports.bds_loading_page = BdsLoading;
//# sourceMappingURL=bds-loading-page.entry.cjs.js.map

//# sourceMappingURL=bds-loading-page.cjs.entry.js.map