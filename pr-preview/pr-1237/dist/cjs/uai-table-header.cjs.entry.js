'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '70382bc57d34600c3dd71b64b722570a41943547', role: "rowgroup" }, index.h("slot", { key: '9789fcc4df7e059df718faa6bb80b21d59aee751' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
