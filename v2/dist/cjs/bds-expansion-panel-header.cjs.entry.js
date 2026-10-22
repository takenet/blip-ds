'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '329c85aa56380cca0aa557164c9a3b419bd0c095' }, index.h("div", { key: 'a1203de639af652e87e957387d005a127c09b5fa', class: "header" }, index.h("slot", { key: '5dd22b6680dfe5e507c2b166b0bd8db2a8cee87f' })), index.h("bds-typo", { key: '30261a1fe48ba39c4efd9e20131dd2c719da0e41', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map