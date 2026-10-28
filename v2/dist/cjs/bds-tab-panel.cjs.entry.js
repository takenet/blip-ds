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
        return (index.h(index.Host, { key: 'ce36cbc4067028b0e433235a2a26e8ad56592a2e', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '17089baa2b50cad2a070e9c860110efc42f641f3' })));
    }
};
TabPanel.style = tabPanelCss();

exports.bds_tab_panel = TabPanel;
