import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-lQDFAY-k.js';

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
        return (h("div", { key: '57d51e0e242c5ac30d9b94f99c7c0fe32efa490a', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '0d39577548c668c4c780810e6a3c5fce4a3e50e1', size: "medium", name: "close" })));
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