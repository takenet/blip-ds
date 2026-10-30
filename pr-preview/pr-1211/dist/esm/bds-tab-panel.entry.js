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
        return (h(Host, { key: 'e4aac7973716af608acf4d0f590e224b4b41ef44', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '9b026fd20c9132bceb8e61911ef9aeced972cd3a' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
