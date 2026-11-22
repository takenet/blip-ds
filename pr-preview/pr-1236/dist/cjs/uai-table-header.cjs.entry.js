'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0d09f2c6e5ff1eaa4ef7fbf56ad86d4f5004b0df', role: "rowgroup" }, index.h("slot", { key: 'e32d6de0e9d5d07ee02f5d72357761aed636d090' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
