'use strict';

var index = require('./index-JW9Yq-qX.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '518f3e9301720fdbde236715abaa7d006bf8464b' }, index.h("div", { key: '2f66fd77e1b5ab7947be22ec14ec84c748a5859a', class: "header" }, index.h("slot", { key: 'de9bbc2985fc953b169891c5d7e2db31a7848bdc' })), index.h("bds-typo", { key: 'aff1700d9c4b749f1e8ae3fa84df10cdb8214d9d', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
