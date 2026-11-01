'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '694a2b816d5ac070512f9e4eb59aa1d011a935dd' }, index.h("div", { key: '7009878228987b5d2837fecc305aa37071edcadd', class: "header" }, index.h("slot", { key: 'f4e27b135534c8288e77ddd1e523c762afc8bcfe' })), index.h("bds-typo", { key: '14074a7581a2e0af4dcf18c2230ae98ef4e09610', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
