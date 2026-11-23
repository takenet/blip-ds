'use strict';

var index = require('./index-GTJCA4wH.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a4b0602a9b41f5297fbe1c4b66a51069bbc3400b' }, index.h("div", { key: 'b395a39d5af70579d5ed55fac16b948b305734df', class: "header" }, index.h("slot", { key: '98b78301877d2034582fe32d8ed488c60d09e92c' })), index.h("bds-typo", { key: 'd7869851d3ce33ef74820cfc02ac888ee7c96f8b', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
