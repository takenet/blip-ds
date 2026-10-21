import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { l as loadAssetSvg } from './p-2NONefL6.js';

const loadingPageCss = ":host{display:block;position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:999}.loading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background-color:var(--color-surface-4, rgb(20, 20, 20));opacity:0.65;mix-blend-mode:multiply}.page_loading{-webkit-animation:growUp 0.8s ease-in-out infinite;animation:growUp 0.8s ease-in-out infinite;width:90px;height:90px;color:var(--color-surface-1, rgb(246, 246, 246))}@-webkit-keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}@keyframes growUp{from{opacity:0}10%{opacity:1}60%{opacity:1}to{-webkit-transform:scale(1.6);transform:scale(1.6);opacity:0}}";

const BdsLoading = /*@__PURE__*/ proxyCustomElement(class BdsLoading extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '9ad89281dcafb49272095e3d5939d671ac1cb836' }, h("div", { key: 'c05054d9e158586994ebfb9535189f162d225765', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '4930d9f927751267a2fd723568b531c293a927dd', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
    static get style() { return loadingPageCss; }
}, [1, "bds-loading-page", {
        "dataTest": [1, "data-test"],
        "svgContent": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-loading-page"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-loading-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsLoading);
            }
            break;
    } });
}

const BdsLoadingPage = BdsLoading;
const defineCustomElement = defineCustomElement$1;

export { BdsLoadingPage, defineCustomElement };
//# sourceMappingURL=bds-loading-page.js.map

//# sourceMappingURL=bds-loading-page.js.map