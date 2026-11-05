'use strict';

var index = require('./index-BuAR9UTp.js');

const tabPanelCss = () => `.bds-tab-panel{display:none;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}`;

const TabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * State to control if a tab panel is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    render() {
        return (index.h(index.Host, { key: 'dbeae46bd98c8343108a27db0f7bd61e2b079008', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: 'ce6fd991bf312e9f99848ec9f941059659697b4f' })));
    }
};
TabPanel.style = tabPanelCss();

exports.bds_tab_panel = TabPanel;
