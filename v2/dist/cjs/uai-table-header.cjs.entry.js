'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0b0dd028f9c8c2890fa2e668a49289577ab83367', role: "rowgroup" }, index.h("slot", { key: 'e36901d6cc6b71eceec2d916c4f463ac0fcdc0d4' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
