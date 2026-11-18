'use strict';

var index = require('./index-Bq8uwDLK.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f920891c5b5a65fb3d408a3e265bc23bde7e7545', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: 'dff6bf84c5857d9cffeae3b45d66d49ebc57aa52', class: "bds-table" }, index.h("slot", { key: 'e6bc5094008c149e15bb4004161f6f0e2b86213a' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
