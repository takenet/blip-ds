import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-CGgHblXS.js';

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
        return (h(Host, { key: '904b53964e655f24141cf2d0ec57398c5c2c2774', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, h("bds-grid", { key: '711b1f05e8c4ae9b60d4d12260e01c1e6c384a02', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { key: '3c5f074f4a105a3c4135ad9867eac9abfd6f7a0e', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, h("div", { key: '9fb27c60dad05d69650fa95bca83adaabb34ca62', class: "animation" }))));
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
//# sourceMappingURL=p-ocQDTgq9.js.map

//# sourceMappingURL=p-ocQDTgq9.js.map