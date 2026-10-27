import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const expansionPanelCss = "*{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}:host{display:block}";

const ExpansionPanel = /*@__PURE__*/ proxyCustomElement(class ExpansionPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '84b85e529d1855022cdf617706bc10824f4b6f1b' }, h("slot", { key: '40ec2f213773b53b9d7791c51b3b105f214bd06a' })));
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