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
        return (h(Host, { key: '98b73447bd1391068dc2aa12f9ed2b7ef8ed9002', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '92a2228cd03b4bf5474aef748df4e93565301c33' })));
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