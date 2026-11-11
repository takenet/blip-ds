'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '874589c439b8c0c0e4bbcf231cdde006bfb781d2', role: "rowgroup" }, index.h("slot", { key: '2d5d4ebdbb990ac6e734463556f5cde6deba2c0c' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
