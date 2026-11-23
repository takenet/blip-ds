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
        return (h(Host, { key: 'dca7230e20e53d8656c43b2c575bbf335cb1582e', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'e92c4c859f2172957554fcb1ac39b0b016ce94d7' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
