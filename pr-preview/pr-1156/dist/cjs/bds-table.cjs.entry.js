'use strict';

var index = require('./index-t1DDWEYz.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5e05227c4e8740de26c8741f4044dbd4ee77f8c6', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '0b4b0afb4653bc6dc333b8131ed0bded716e73a7', class: "bds-table" }, index.h("slot", { key: '301a391a0ad2e7b0265600bd040d0e3cdd3f5157' }))));
    }
};
Table.style = tableCss;

exports.bds_table = Table;
//# sourceMappingURL=bds-table.entry.cjs.js.map

//# sourceMappingURL=bds-table.cjs.entry.js.map