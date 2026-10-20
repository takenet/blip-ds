'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2c413b73e5f35b071153733247dd0e44e731e308' }, index.h("div", { key: 'ff4b67c95384657ba48d5cafb148e7b2b45e0c68', class: "header" }, index.h("slot", { key: '27b4413a2373e9b873d59fde43b385d745aee068' })), index.h("bds-typo", { key: '7606c99e160bbbefbfff6f044f89bcf901513ca4', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map