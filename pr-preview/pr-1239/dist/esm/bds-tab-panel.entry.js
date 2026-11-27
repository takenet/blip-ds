import { r as registerInstance, h, H as Host } from './index-DUwG7Zwx.js';

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
        return (h(Host, { key: '98c8e6bd94162b87dc72cdb4d518954e63d89178', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'b8499e6fe2df42ff768f654d7637aaaef4c4b1e2' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
