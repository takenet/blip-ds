'use strict';

var index = require('./index-JW9Yq-qX.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'bc746a1719f3f544f50f1dc43bd9d1eba5fb455c', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '26033c643bcb5a66c5ab7bfc480b978b6ff96555', class: "bds-table" }, index.h("slot", { key: 'ba3f09a9081613623d01a5a52a06fddf31bc9d88' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
