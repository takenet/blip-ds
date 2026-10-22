'use strict';

var index = require('./index-DQyYkciT.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0a1f1bcac66ff041c740cbbe666938e553532b62', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '459e32cafa8301a63e4baa5d9f2e11f8bce6e994', class: "bds-table" }, index.h("slot", { key: 'a4003fa46489078c3242ad785badfb0e9338a4b9' }))));
    }
};
Table.style = tableCss;

exports.bds_table = Table;
//# sourceMappingURL=bds-table.entry.cjs.js.map

//# sourceMappingURL=bds-table.cjs.entry.js.map