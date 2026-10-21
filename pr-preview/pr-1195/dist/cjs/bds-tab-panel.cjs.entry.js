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
        return (index.h(index.Host, { key: '7ec2d1228f8768bffbd8590f41c73e4fb3711a3b', class: {
                'bds-tab-panel': true,
                ['bds-tab-panel--selected']: this.isActive,
            } }, index.h("slot", { key: 'dee4a82d98d4979a39a3d9f3a7e901f98ae1c2f8' })));
    }
};
TabPanel.style = tabPanelCss;

exports.bds_tab_panel = TabPanel;
//# sourceMappingURL=bds-tab-panel.entry.cjs.js.map

//# sourceMappingURL=bds-tab-panel.cjs.entry.js.map