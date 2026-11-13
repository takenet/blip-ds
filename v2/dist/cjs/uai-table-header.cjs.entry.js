'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1ea3dd98eb545e3a3b571e0e01be3586952f2645', role: "rowgroup" }, index.h("slot", { key: '7a5aa11962413db19777df2274eafd2894265556' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
