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
        return (h(Host, { key: 'a991c87b7fd1278ad0c5f022d58b6520de131bb4', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '44f58fa2d37a6eb49144c019cefd024c4de8594a' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
