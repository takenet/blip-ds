'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5307c96c6d0c5d531c477bb4649bd67182e6e00f' }, index.h("div", { key: '6d15290cc4de63ec8e1203fe671ea219e59bc3a0', class: "header" }, index.h("slot", { key: '3059966d0e81e4662069aa30320144a3cd5aff2a' })), index.h("bds-typo", { key: '2b5882b509bb78c87c3c4f912dc2b9eff285af38', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map