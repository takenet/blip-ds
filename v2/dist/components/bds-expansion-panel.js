import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = /*@__PURE__*/ proxyCustomElement(class ExpansionPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '609f74ca9b104ffc07239a729a0a7511788085c6' }, h("slot", { key: 'dd4a877814f9f27a440b21c0932ff328a711a2b8' })));
    }
    static get style() { return expansionPanelCss; }
}, [1, "bds-expansion-panel"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-expansion-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-expansion-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ExpansionPanel);
            }
            break;
    } });
}

const BdsExpansionPanel = ExpansionPanel;
const defineCustomElement = defineCustomElement$1;

export { BdsExpansionPanel, defineCustomElement };
//# sourceMappingURL=bds-expansion-panel.js.map

//# sourceMappingURL=bds-expansion-panel.js.map