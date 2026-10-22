import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = /*@__PURE__*/ proxyCustomElement(class ExpansionPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '072e1f26e0414de222926056cb733de1e8d93063' }, h("slot", { key: 'e87bc4844b7a755c2be48981a6673fb7706300e3' })));
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