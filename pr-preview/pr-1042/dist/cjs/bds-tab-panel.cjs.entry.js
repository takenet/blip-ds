'use strict';

var index = require('./index-D_zq0Z7d.js');

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
        return (index.h(index.Host, { key: '4c1ba012e2d0b47e592064c0870d0ea6321af4bb', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: '5ba81064a847c7b1bf70041b9405d25595ba5593' })));
    }
};
TabPanel.style = tabPanelCss;

exports.bds_tab_panel = TabPanel;
//# sourceMappingURL=bds-tab-panel.entry.cjs.js.map

//# sourceMappingURL=bds-tab-panel.cjs.entry.js.map