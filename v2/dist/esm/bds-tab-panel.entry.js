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
        return (h(Host, { key: '2cb4066270fc5ca03707d1e9e81da301d9ce46d6', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '1dfd4ccfb46ae9e1ab2fbda3b18241884b842ef3' })));
    }
};
TabPanel.style = tabPanelCss;

export { TabPanel as bds_tab_panel };
//# sourceMappingURL=bds-tab-panel.entry.js.map

//# sourceMappingURL=bds-tab-panel.entry.js.map