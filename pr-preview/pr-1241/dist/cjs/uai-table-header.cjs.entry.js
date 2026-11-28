'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e59dc06e78e7c294018c8150f25880ff8b63f986', role: "rowgroup" }, index.h("slot", { key: '4d573c451c38962158086bcb2483e809a835b8a9' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
