'use strict';

var index = require('./index-BqjYThoc.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4b866bbeaf4e2a75dbe05e01c84476894e10f5db', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: 'ff5f43216fc34733dc65bb5c56dbaee18a0cd89b', class: "bds-table" }, index.h("slot", { key: '49da8ff435066fb4a2a9716e2608f3d74d5acb89' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
