import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-D3lgj3w8.js';

const skeletonCss = ".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}";

const Skeleton = /*@__PURE__*/ proxyCustomElement(class Skeleton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '197291536f4f1040c6fb84d04de1eefb93bff169', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, h("bds-grid", { key: '1b80d31d9e4e39c6f855662bcfced011523e1a91', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { key: 'e92b287da270706d9d25efcde0fcf2da8af254b9', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, h("div", { key: '174969e6c92034eab3e42afd40b5c199583c4413', class: "animation" }))));
    }
    static get style() { return skeletonCss; }
}, [1, "bds-skeleton", {
        "shape": [1],
        "height": [1],
        "width": [1],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-skeleton", "bds-grid"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-skeleton":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Skeleton);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Skeleton as S, defineCustomElement as d };
//# sourceMappingURL=p-BvTvyag5.js.map

//# sourceMappingURL=p-BvTvyag5.js.map