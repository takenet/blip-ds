'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '04a98b50bf4a814424f5be0fe20611cf4b39557f' }, index.h("div", { key: '5116a99ce2121db25f5f53b8301df9c5c9a99a17', class: "header" }, index.h("slot", { key: 'e0a77242ee41cb0fc84bddde97c2325858bf4b7f' })), index.h("bds-typo", { key: '6a0caf8897b2f7552e96b2046f55a761779ec179', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map