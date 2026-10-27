import { p as proxyCustomElement, H, h } from './index.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction$1 = /*@__PURE__*/ proxyCustomElement(class BdsModalAction extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: '035fc5035aa3360c22b0cbf08ace277be70b5903', class: "modal__action" }, h("slot", { key: '488434e623b0ad49f99239721b468c8193551e05' })));
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