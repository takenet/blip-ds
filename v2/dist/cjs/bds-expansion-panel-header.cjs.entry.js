'use strict';

var index = require('./index-D_zq0Z7d.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '160caf7fb88e9cae0869faf7f2161154cb8ba12a' }, index.h("div", { key: '1fe047be9617b0da910a31930c38e5c9600d0aee', class: "header" }, index.h("slot", { key: '2bfdeb7b4b1d413a3d1884655683019cea1ca907' })), index.h("bds-typo", { key: '8d41907d7a948576ac15710c3700e1103c22ab60', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map