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
        return (h(Host, { key: '89399c4b74484c985757aaff21bce45af290c3af', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, h("slot", { key: 'd8b520f78fbb7272122c12b15632ee04ee127d0a' })));
    }
};
TabPanel.style = tabPanelCss();

export { TabPanel as bds_tab_panel };
