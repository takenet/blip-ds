import { p as proxyCustomElement, H, h } from './index.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction$1 = /*@__PURE__*/ proxyCustomElement(class BdsModalAction extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'ebe79c0f5e218d99d6d66bee77b445f8f676dba6', class: "modal__action" }, h("slot", { key: '97ae98d57d4d9735bb404ad3baf75fabf9067c3f' })));
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