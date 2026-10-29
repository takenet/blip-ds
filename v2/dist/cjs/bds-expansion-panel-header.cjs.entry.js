'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4bc48ee6c7d5d279c2e6b1cf7db3dc3dc788c4ad' }, index.h("div", { key: '745ce8b10876da58ba5b126c2e31b4045b52e9f9', class: "header" }, index.h("slot", { key: '3225734edc2a4d1f8243bbeb97263deec9d3e47b' })), index.h("bds-typo", { key: 'ec98b52ecfd441b2f809b387f637b4c7aba367e8', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
