import { r as registerInstance, h, H as Host } from './index-BALoTlPi.js';

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";

const TabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TabPanel.style = tabPanelCss;

export { TabPanel as bds_tab_panel };
//# sourceMappingURL=bds-tab-panel.entry.js.map

//# sourceMappingURL=bds-tab-panel.entry.js.map