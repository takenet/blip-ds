import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-Cmult6Pm.js';

const modalCloseButtonCss = ".modal__close__button-icon{opacity:0;visibility:hidden;color:var(--color-content-default, rgb(40, 40, 40));display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:16px}.modal__close__button-icon--active{opacity:1;visibility:visible}";

const BdsModalCloseButton$1 = /*@__PURE__*/ proxyCustomElement(class BdsModalCloseButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Used to hide or show the close button
         */
        this.active = true;
    }
    render() {
        return (h("div", { key: '0cdaccc1f96fc49fbcc28dcc50ced6ae947a9148', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: 'cf403c61aa2fb904e43463affeb826b54d7d3168', size: "medium", name: "close" })));
    }
    static get style() { return modalCloseButtonCss; }
}, [1, "bds-modal-close-button", {
        "active": [1540]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-modal-close-button", "bds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-modal-close-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsModalCloseButton$1);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsModalCloseButton = BdsModalCloseButton$1;
const defineCustomElement = defineCustomElement$1;

export { BdsModalCloseButton, defineCustomElement };
//# sourceMappingURL=bds-modal-close-button.js.map

//# sourceMappingURL=bds-modal-close-button.js.map