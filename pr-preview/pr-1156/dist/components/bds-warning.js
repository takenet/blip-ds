import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-DmvHH3kg.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = /*@__PURE__*/ proxyCustomElement(class Warning extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '7c6c1006bce5bb0976f015664f8bcc2f63bcb52a' }, h("div", { key: 'f5b7e642931181c37c2c13de09f65b1749752aac', class: "warning__body" }, h("bds-icon", { key: 'ce17467b9be1634b4382adc87676419f88a5ab20', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'ebf10c5e0163dc0e65e784defc6543f8512932a9', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '70f037851be636f7f088d1d7b6fadd31676ac8c8' })))));
    }
    static get style() { return warningCss; }
}, [1, "bds-warning"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-warning", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-warning":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Warning);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsWarning = Warning;
const defineCustomElement = defineCustomElement$1;

export { BdsWarning, defineCustomElement };
//# sourceMappingURL=bds-warning.js.map

//# sourceMappingURL=bds-warning.js.map