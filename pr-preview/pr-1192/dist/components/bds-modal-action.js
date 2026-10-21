import { p as proxyCustomElement, H, h } from './index.js';

const modalActionCss = ".modal__action{display:-ms-flexbox;display:flex;padding-top:16px;bottom:32px;right:32px}";

const BdsModalAction$1 = /*@__PURE__*/ proxyCustomElement(class BdsModalAction extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'a927e08c858e4b83adbfd45146298c6803d3cdee', class: "modal__action" }, h("slot", { key: '5375008304f32a5d0020a2393e23dd60c6f5bc6e' })));
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