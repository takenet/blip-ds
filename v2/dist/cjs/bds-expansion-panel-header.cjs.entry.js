'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '340e1241125bd3a566072f75992cae6767e6dd27' }, index.h("div", { key: '570176a0764fd0ee55927ee74d8112d66d7eee39', class: "header" }, index.h("slot", { key: '2608f50525ce028d4720de9c4973dd1863f5f2cb' })), index.h("bds-typo", { key: '877c733a572db0f43e18ca828363b058aee21f18', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
