'use strict';

var index = require('./index-t1DDWEYz.js');

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
        return (index.h(index.Host, { key: '98b73447bd1391068dc2aa12f9ed2b7ef8ed9002', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '92a2228cd03b4bf5474aef748df4e93565301c33' })));
    }
};
TabPanel.style = tabPanelCss;

exports.bds_tab_panel = TabPanel;
//# sourceMappingURL=bds-tab-panel.entry.cjs.js.map

//# sourceMappingURL=bds-tab-panel.cjs.entry.js.map