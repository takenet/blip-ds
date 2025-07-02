import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = /*@__PURE__*/ proxyCustomElement(class ExpansionPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'e6517c554947ddf47f9e389853357dc772fcfe3c' }, h("slot", { key: '6c9e0041ee7030c9f01e78730282b417b5c2425b' })));
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