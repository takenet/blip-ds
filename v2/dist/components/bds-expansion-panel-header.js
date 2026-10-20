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
        return (h(Host, { key: '2c413b73e5f35b071153733247dd0e44e731e308' }, h("div", { key: 'ff4b67c95384657ba48d5cafb148e7b2b45e0c68', class: "header" }, h("slot", { key: '27b4413a2373e9b873d59fde43b385d745aee068' })), h("bds-typo", { key: '7606c99e160bbbefbfff6f044f89bcf901513ca4', tag: "p", variant: "fs-12" }, this.text)));
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