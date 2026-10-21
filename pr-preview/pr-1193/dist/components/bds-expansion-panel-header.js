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
        return (h(Host, { key: '329c85aa56380cca0aa557164c9a3b419bd0c095' }, h("div", { key: 'a1203de639af652e87e957387d005a127c09b5fa', class: "header" }, h("slot", { key: '5dd22b6680dfe5e507c2b166b0bd8db2a8cee87f' })), h("bds-typo", { key: '30261a1fe48ba39c4efd9e20131dd2c719da0e41', tag: "p", variant: "fs-12" }, this.text)));
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