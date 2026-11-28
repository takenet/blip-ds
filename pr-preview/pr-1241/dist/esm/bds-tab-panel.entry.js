import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

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
        return (h(Host, { key: '85f4aa6a21f34e010a1ed145861bdc6500e6d191', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'f5f10417d82d9242801ba4e518be7d9f44ef8347' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
