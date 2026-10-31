'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '536de2e90ced0d96c43c81f271cf0345549dc6f3', role: "rowgroup" }, index.h("slot", { key: '424e73ad2df0e8692f4047d6c4a94505628dae34' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
