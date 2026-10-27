'use strict';

var index = require('./index-DQyYkciT.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a6bdf8d78c5dc8e182bcfca2d4ab0c439ea8f476', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '3401754fe3ea434c0562eebecc75882fe86baebf', class: "bds-table" }, index.h("slot", { key: '029461b3c43c967db0aaf65f4aa2cd85f0345e5a' }))));
    }
};
Table.style = tableCss;

exports.bds_table = Table;
//# sourceMappingURL=bds-table.entry.cjs.js.map

//# sourceMappingURL=bds-table.cjs.entry.js.map