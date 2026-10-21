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
        return (h(Host, { key: '87d79792850b02e4880d98523b47a077d90724d2', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '334cd9b805e04abc3de1aedfe7b8967edaff5e0b' })));
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