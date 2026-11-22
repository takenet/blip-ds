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
        return (h(Host, { key: '3edd3c699b0ab4fcc3da8f3688e635e813830141', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '049d3bf8ae9af9564c3270cea1eaffb1ad067871' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
