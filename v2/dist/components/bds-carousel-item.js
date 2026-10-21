import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$6 } from './p-D3lgj3w8.js';
import { d as defineCustomElement$5 } from './p-Cqc3m7yw.js';
import { d as defineCustomElement$4 } from './p-D0uXJx8T.js';
import { d as defineCustomElement$3 } from './p-BvTvyag5.js';
import { d as defineCustomElement$2 } from './p-HUbgptm9.js';

const carouselItemCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}.carrosel-item-frame{display:block;width:100%;height:100%;border-radius:8px;position:relative;overflow:hidden}.carrosel-item-frame ::slotted(*){position:relative}.image-bg{position:absolute;width:100%;height:100%}";

const BdsCarouselItem$1 = /*@__PURE__*/ proxyCustomElement(class BdsCarouselItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
        this.bgImageBrightness = 1;
    }
    render() {
        return (h(Host, { key: '4790642f490dd16a97e5459a565bda0977777b3b', class: "carrosel-item" }, h("bds-theme-provider", { key: '524a7e8f2998d4d6e7cc53e008e6520f72936e67', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '01c8c54cd5d682fba061710c3c3684fa6507e637', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: 'aefee624ef00b5f497eaec54a58e730c29c8cef5' }))));
    }
    static get style() { return carouselItemCss; }
}, [1, "bds-carousel-item", {
        "theme": [1],
        "bgImage": [1, "bg-image"],
        "bgImageBrightness": [2, "bg-image-brightness"],
        "bgColor": [1, "bg-color"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-carousel-item", "bds-grid", "bds-illustration", "bds-image", "bds-skeleton", "bds-theme-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-carousel-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsCarouselItem$1);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "bds-illustration":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-theme-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsCarouselItem = BdsCarouselItem$1;
const defineCustomElement = defineCustomElement$1;

export { BdsCarouselItem, defineCustomElement };
//# sourceMappingURL=bds-carousel-item.js.map

//# sourceMappingURL=bds-carousel-item.js.map