'use strict';

var index = require('./index-DQyYkciT.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6a28592119709a47081de7dc91640ab3ce5871b1' }, index.h("div", { key: 'b2bd40848cbc92ef859c5bb339b158f5a9257bfd', class: "header" }, index.h("slot", { key: '51cc23d8da9b3d332fb8641e35ee0373e0474fcc' })), index.h("bds-typo", { key: '36980f48d7ea2c64bc3c537ea212e10b0411b339', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map