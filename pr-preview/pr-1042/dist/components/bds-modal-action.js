import { p as proxyCustomElement, H, h } from './index.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction$1 = /*@__PURE__*/ proxyCustomElement(class BdsModalAction extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'd5b97cda116ceeca2ec39f20a131abc5c03ea018', class: "modal__action" }, h("slot", { key: '9cd8201ca880d4a3ce292331970f08b5839e04b7' })));
    }
    static get style() { return modalActionCss; }
}, [1, "bds-modal-action"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-modal-action"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-modal-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsModalAction$1);
            }
            break;
    } });
}

const BdsModalAction = BdsModalAction$1;
const defineCustomElement = defineCustomElement$1;

export { BdsModalAction, defineCustomElement };
//# sourceMappingURL=bds-modal-action.js.map

//# sourceMappingURL=bds-modal-action.js.map