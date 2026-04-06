'use strict';

var index = require('./index-t1DDWEYz.js');

const expansionPanelHeaderCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header{width:70px;padding-right:6px}";

const ExpansionPanelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0ad6872e50b80c7a00518b84f11ba71da7033183' }, index.h("div", { key: 'f35ae97d473e77d88f47190f110c4ea571b76960', class: "header" }, index.h("slot", { key: '3f0e60bda5aba37cc4ed2bd7e7438edfb4f71302' })), index.h("bds-typo", { key: '8a7eba1a587a4266fdd1f3a93ee23d9213ca0336', tag: "p", variant: "fs-12" }, this.text)));
    }
};
ExpansionPanelHeader.style = expansionPanelHeaderCss;

exports.bds_expansion_panel_header = ExpansionPanelHeader;
//# sourceMappingURL=bds-expansion-panel-header.entry.cjs.js.map

//# sourceMappingURL=bds-expansion-panel-header.cjs.entry.js.map