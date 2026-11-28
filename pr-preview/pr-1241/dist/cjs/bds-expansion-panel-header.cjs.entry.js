'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3a6b9e16331d1dbd0d34b870f0261b1abfe6c43e' }, index.h("div", { key: 'eac719f67e592f1f58ba85d6dd09acd68e5c4953', class: "header" }, index.h("slot", { key: '8234fd2a49cb07a86bed58db74684590ea2e50a2' })), index.h("bds-typo", { key: '8bec6c72828fcc955380b0e4914b092f70bb4798', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
