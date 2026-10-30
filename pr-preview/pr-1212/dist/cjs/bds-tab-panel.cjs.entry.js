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
        return (index.h(index.Host, { key: '68862be9c1cd1b0b24abc9d55babe86a179644eb', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: 'e50169af5d7ebe55204a3a4e68ea167684f42f0e' })));
    }
};
TabPanel.style = tabPanelCss();

exports.bds_tab_panel = TabPanel;
