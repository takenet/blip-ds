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
        return (h(Host, { key: '0ad6872e50b80c7a00518b84f11ba71da7033183' }, h("div", { key: 'f35ae97d473e77d88f47190f110c4ea571b76960', class: "header" }, h("slot", { key: '3f0e60bda5aba37cc4ed2bd7e7438edfb4f71302' })), h("bds-typo", { key: '8a7eba1a587a4266fdd1f3a93ee23d9213ca0336', tag: "p", variant: "fs-12" }, this.text)));
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