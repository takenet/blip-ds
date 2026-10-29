'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '757a5107ba7dd1d4e87a0d1e89f2c0c399dd013e' }, index.h("div", { key: 'b2710612c977694bc0bbcb541d9d34b2895b49d8', class: "header" }, index.h("slot", { key: 'edcdafe7cb93d38042b982e70087d62ef41b6cde' })), index.h("bds-typo", { key: '3a9167676411fd89b8a6448596c143042f54e11b', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
