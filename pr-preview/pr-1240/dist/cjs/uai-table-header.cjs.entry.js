'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c5463b339d27f99b66d9b90395505cf2d5539219', role: "rowgroup" }, index.h("slot", { key: 'efcb589031f71dd17d8d4ed1b6d7a12db63b472a' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
