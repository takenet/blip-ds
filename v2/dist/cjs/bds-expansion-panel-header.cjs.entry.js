'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a7094a7530f07c6ac9b984f9e3d3499d370e51fa' }, index.h("div", { key: '00b00cad2e10ee9b425deca218fbdfb34d79c1bd', class: "header" }, index.h("slot", { key: '41e8c9c7099adaf1035304348f1eec1d2ee220f4' })), index.h("bds-typo", { key: '3eeee774ed6b1a158e11fe0c2213710c7e2f326d', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
