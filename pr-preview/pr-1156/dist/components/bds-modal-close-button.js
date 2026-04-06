import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$2 } from './p-DmvHH3kg.js';

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
        return (h("div", { key: 'd6ea492d18d91f1f45ab03be24329f0261ae0122', class: {
                'modal__close__button-icon': true,
                'modal__close__button-icon--active': this.active,
            } }, h("bds-icon", { key: '9bcd8954b21597228d34a3d85bf7c4d7527f1018', size: "medium", name: "close" })));
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