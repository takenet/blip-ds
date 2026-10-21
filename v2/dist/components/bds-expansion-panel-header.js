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
        return (h(Host, { key: '5307c96c6d0c5d531c477bb4649bd67182e6e00f' }, h("div", { key: '6d15290cc4de63ec8e1203fe671ea219e59bc3a0', class: "header" }, h("slot", { key: '3059966d0e81e4662069aa30320144a3cd5aff2a' })), h("bds-typo", { key: '2b5882b509bb78c87c3c4f912dc2b9eff285af38', tag: "p", variant: "fs-12" }, this.text)));
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