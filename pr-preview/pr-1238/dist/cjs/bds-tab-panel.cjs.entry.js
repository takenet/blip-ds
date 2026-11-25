'use strict';

var index = require('./index-GTJCA4wH.js');

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
        return (index.h(index.Host, { key: '7145ed24f62b80f2d31e66b1972e1aec4131a683', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '26cb2a0a9712cde51ecf589acfdf1d1cbfe4e324' })));
    }
};
TabPanel.style = tabPanelCss();

exports.bds_tab_panel = TabPanel;
