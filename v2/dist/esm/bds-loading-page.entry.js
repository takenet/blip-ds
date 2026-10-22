import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';
import { l as loadAssetSvg } from './asset-loader-2NONefL6.js';

const loadingPageCss = ":host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, rgb(20, 20, 20));opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:90px;height:90px;color:var(--color-surface-1, rgb(246, 246, 246))}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}";

const BdsLoading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                const svg = await loadAssetSvg('asset-component-loading-page');
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
        return (h(Host, { key: '8d429a85e540b2443d000bd6866d84767d480d38' }, h("div", { key: '735e9eea6e8ef74e609d5a4c45d14ef6e6802903', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '243a8828d49cb2955247519860356eb268f18193', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
};
BdsLoading.style = loadingPageCss;

export { BdsLoading as bds_loading_page };
//# sourceMappingURL=bds-loading-page.entry.js.map

//# sourceMappingURL=bds-loading-page.entry.js.map