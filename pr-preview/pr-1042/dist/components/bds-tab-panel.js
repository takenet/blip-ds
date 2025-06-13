import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";

const TabPanel = /*@__PURE__*/ proxyCustomElement(class TabPanel extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * State to control if a tab panel is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    render() {
        return (h(Host, { key: '4c1ba012e2d0b47e592064c0870d0ea6321af4bb', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '5ba81064a847c7b1bf70041b9405d25595ba5593' })));
    }
    static get style() { return tabPanelCss; }
}, [4, "bds-tab-panel", {
        "group": [1],
        "isActive": [32]
    }, [[16, "bdsTabChange", "handleTabChange"], [16, "bdsTabInit", "handleTabChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-tab-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-tab-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TabPanel);
            }
            break;
    } });
}

const BdsTabPanel = TabPanel;
const defineCustomElement = defineCustomElement$1;

export { BdsTabPanel, defineCustomElement };
//# sourceMappingURL=bds-tab-panel.js.map

//# sourceMappingURL=bds-tab-panel.js.map