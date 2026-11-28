'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7db8e2523e9dbab8162df594f5b417efadbed1da' }, index.h("div", { key: '7a690c0136c59226956ce8ac3386040e462de639', class: "header" }, index.h("slot", { key: '47806967cd0efb2ac16f7c263205a11425a624f7' })), index.h("bds-typo", { key: 'fcf7c1a63c9a7c82c5d1817e2826fb19f623c5ef', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
