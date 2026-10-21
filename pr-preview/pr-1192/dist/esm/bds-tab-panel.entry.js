import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

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
        return (h(Host, { key: 'f3fb4623b8d80a2e41abaf56554a24b11fd1f093', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '5658eb00959ccbf8aa5d17d28709b52ddf040c45' })));
    }
};
TabPanel.style = tabPanelCss;

export { TabPanel as bds_tab_panel };
//# sourceMappingURL=bds-tab-panel.entry.js.map

//# sourceMappingURL=bds-tab-panel.entry.js.map