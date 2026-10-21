import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = /*@__PURE__*/ proxyCustomElement(class ExpansionPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '856851827d63c7cd6f03b6bc8725372295af8547' }, h("slot", { key: '1a4e354132bdfb4df8f957095013b449f3ccc2f3' })));
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