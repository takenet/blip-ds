'use strict';

var index = require('./index-BuAR9UTp.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a5d3c97b7804f8c8f366ab4a6368e818717d61fb', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '7eed03b5564f44023363b9c7f9ef84be5363f219', class: "bds-table" }, index.h("slot", { key: 'cadb325dc945a03ecba2ca290f37e257303a7a7a' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
