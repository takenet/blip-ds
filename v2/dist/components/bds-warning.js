import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-BHBVuzyo.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = /*@__PURE__*/ proxyCustomElement(class Warning extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '2da3c710703c1e9bae01c6763ab24d3cf4f64325' }, h("div", { key: 'e1c61b4f2b081397c20fa9ee0f54f60aa3a2a259', class: "warning__body" }, h("bds-icon", { key: 'e393207758f193ef32257d285913f2fade8c0884', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: '752ac0b48c01a3df053fae0a641ab5623da3a5fb', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '06000d1b396177a5a4122dadba1370bc0b945585' })))));
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