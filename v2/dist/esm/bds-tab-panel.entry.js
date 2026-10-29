import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

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
        return (h(Host, { key: '1dd65c01965cb0e002ac3cad5c3bd7f09e422f24', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '937270ab93aabeec55f7f84547857e136fb584c8' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
