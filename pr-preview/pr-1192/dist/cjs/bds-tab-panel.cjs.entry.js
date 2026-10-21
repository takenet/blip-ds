'use strict';

var index = require('./index-DQyYkciT.js');

const tabPanelCss = ".bds-tab-panel{display:none;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:1rem;font-style:normal;font-weight:normal}.bds-tab-panel--selected{display:block}";

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
        return (index.h(index.Host, { key: 'f6359991e6589d83d200f02925ebcd219fad6b50', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '1f0125043fbd94426c218436c1380598436a7dd7' })));
    }
};
TabPanel.style = tabPanelCss;

exports.bds_tab_panel = TabPanel;
//# sourceMappingURL=bds-tab-panel.entry.cjs.js.map

//# sourceMappingURL=bds-tab-panel.cjs.entry.js.map