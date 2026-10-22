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
        return (h(Host, { key: '7ec2d1228f8768bffbd8590f41c73e4fb3711a3b', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'dee4a82d98d4979a39a3d9f3a7e901f98ae1c2f8' })));
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