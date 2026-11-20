import { r as registerInstance, h, H as Host } from './index-D799VfbI.js';

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
        return (h(Host, { key: 'f5115f0ca5b478558c58c3e02ed1e5055844a0f3', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: '32c1310ee5dabd85f2da6aee82d6d4385c59d99d' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
