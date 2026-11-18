'use strict';

var index = require('./index-Bq8uwDLK.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fb4d86776fdc83fcf881d1d44b6a86bf128c4fcd' }, index.h("div", { key: 'fd4cdf6cd2651eb9182a7dcd1d792ef53d932865', class: "header" }, index.h("slot", { key: '85105cb6070262aa1ab58a8b9e4102054dec7651' })), index.h("bds-typo", { key: '7560e58dbe685590b12adf5860f4bc1ce6405de0', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
