import { r as registerInstance, h, H as Host } from './index-C3J6Z5OX.js';

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
        return (h(Host, { key: '9135100281ec90f482c5d6bdd40135f96d238370', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'c8fa8c65e0b86693e57bc5e4028233df4264cefa' })));
    }
};
TabPanel.style = tabPanelCss;

export { TabPanel as bds_tab_panel };
//# sourceMappingURL=bds-tab-panel.entry.js.map

//# sourceMappingURL=bds-tab-panel.entry.js.map