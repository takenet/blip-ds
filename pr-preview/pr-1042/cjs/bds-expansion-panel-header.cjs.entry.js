'use strict';

var index = require('./index-DnryYWxm.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '11ec89a6d12db11f4629d761d53aa945e928a389' }, index.h("div", { key: '58352eb801a31e1ae7b83373d91c8503ac8fabc3', class: "header" }, index.h("slot", { key: 'f85479d8b5b92ed149b9cc437998f9093d81fc80' })), index.h("bds-typo", { key: 'c5d2ba5b9c2b0339fac9ee5c0dc6fc2913cd3e4c', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map