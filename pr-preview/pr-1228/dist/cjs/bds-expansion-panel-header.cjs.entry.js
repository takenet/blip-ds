'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f45556030aaae462274ef1c5cb90b02edf35b0e4' }, index.h("div", { key: '4420eea83495f8419bdb898998dd451d83b43521', class: "header" }, index.h("slot", { key: '7bfd5c95a4392c0c19f3738b2ba3d00052e7d371' })), index.h("bds-typo", { key: '4dc1fe19bde064a2fee3682772a47e774d737d30', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
