import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const tabPanelCss = () => `.bds-tab-panel{display:none;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}`;

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
        return (h(Host, { key: '5c00938bd0ecc65fb96cf9bdc3c66e1cf9a0285e', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '230a7ece5a265e850470743eebe175ef3c7d5c58' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
