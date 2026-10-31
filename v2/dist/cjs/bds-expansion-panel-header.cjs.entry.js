'use strict';

var index = require('./index-BuAR9UTp.js');

const expansionPanelHeaderCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}`;

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6e486a593d3abc583c631ea2e990e0bec62333da' }, index.h("div", { key: 'db3eee5ba1e50c48158da374343b7ce8f8185106', class: "header" }, index.h("slot", { key: '6380860b9e318f990f63558c5a5e226db35f9fa2' })), index.h("bds-typo", { key: '406c96ba99159078ebbffe4cc8d147cb4450bfc8', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss();

exports.bds_expansion_panel_header = ExpansionPanelHeader;
