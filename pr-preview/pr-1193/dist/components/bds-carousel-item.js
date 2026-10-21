import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$6 } from './p-dCdulcnF.js';
import { d as defineCustomElement$5 } from './p-DRa2l_JH.js';
import { d as defineCustomElement$4 } from './p-C_nfNaSJ.js';
import { d as defineCustomElement$3 } from './p-_wvaiR3O.js';
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
        return (h(Host, { key: '97d4905acb5925034403e909c4b2c87aeda5ae67', class: "carrosel-item" }, h("bds-theme-provider", { key: 'e7746ebd74e698b99b7286ee93cd37f9c254fa03', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: 'd52e32c3203349d2955e037f93ba02682489b99e', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: 'e5544e36e76a18107f8fc15caa4fc65745ee3200' }))));
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