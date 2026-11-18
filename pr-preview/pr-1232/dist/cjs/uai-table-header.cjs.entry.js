'use strict';

var index = require('./index-Bq8uwDLK.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2894ae96f19985f920fd0852063692df1533ee38', role: "rowgroup" }, index.h("slot", { key: '4a9b619a59fc6826fb340ef201a21d4f90c15799' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
