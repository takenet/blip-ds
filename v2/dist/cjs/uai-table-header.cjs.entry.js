'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ee18a1c3a0a53e29f478eadbe95f60801b9fba64', role: "rowgroup" }, index.h("slot", { key: 'c2c682863290d36fbeaa4b088cc993ca38ae64ea' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
