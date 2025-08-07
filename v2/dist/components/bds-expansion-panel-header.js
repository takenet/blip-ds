import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = /*@__PURE__*/ proxyCustomElement(class ExpansionPanelHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '160caf7fb88e9cae0869faf7f2161154cb8ba12a' }, h("div", { key: '1fe047be9617b0da910a31930c38e5c9600d0aee', class: "header" }, h("slot", { key: '2bfdeb7b4b1d413a3d1884655683019cea1ca907' })), h("bds-typo", { key: '8d41907d7a948576ac15710c3700e1103c22ab60', tag: "p", variant: "fs-12" }, this.text)));
    }
    static get style() { return expansionPanelHeaderCss; }
}, [1, "bds-expansion-panel-header", {
        "text": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-expansion-panel-header", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-expansion-panel-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ExpansionPanelHeader);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsExpansionPanelHeader = ExpansionPanelHeader;
const defineCustomElement = defineCustomElement$1;

export { BdsExpansionPanelHeader, defineCustomElement };
//# sourceMappingURL=bds-expansion-panel-header.js.map

//# sourceMappingURL=bds-expansion-panel-header.js.map