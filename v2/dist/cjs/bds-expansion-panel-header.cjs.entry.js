'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f5c67cd7f35aba8702db69ebb7b8b2599d73615c' }, index.h("div", { key: '5eb82c3518bcd462a88bf3a403f352e4b1124e1a', class: "header" }, index.h("slot", { key: 'f92cd129fbedb4adb31837625805e4606d0155cc' })), index.h("bds-typo", { key: 'd392a333d6b4af0bb009cc9124d74cf6a9c28e4a', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
