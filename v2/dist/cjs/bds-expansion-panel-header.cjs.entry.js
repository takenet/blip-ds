'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e7cbbcbab0da92a11c9d1f58c35db39c1275c37a' }, index.h("div", { key: 'dd92ea14738fb533ac407343ef801e1f0a6ff81b', class: "header" }, index.h("slot", { key: '6b83b8c1ab7de8d71df1333ec2fda93a47129cf2' })), index.h("bds-typo", { key: '9bba2719a418ceeaadbcccba5870be44ca3aacf5', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
