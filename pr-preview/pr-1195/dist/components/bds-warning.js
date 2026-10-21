import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-B29nqhOO.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = /*@__PURE__*/ proxyCustomElement(class Warning extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'e4ed013a5d12762984bda876b82fc58a3815ec67' }, h("div", { key: '2d6fd5dfb9a78afdf1380638874ee7c85dc08918', class: "warning__body" }, h("bds-icon", { key: '3d9769f1487396a048963ce817c7c8979046dd95', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { key: 'e67eb29dba2b0f95c10772eefa4f3d1dc878c3ba', variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", { key: '3cbffa1d41a04921e55d148d3031261fb6ed6aeb' })))));
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