'use strict';

var index = require('./index-BuAR9UTp.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '335391e452ebc481926217d7dbbbe166bf743290', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '3155b4f14b8acb41d7ecdeb94e16e6b7ef21e337', class: "bds-table" }, index.h("slot", { key: '5d4b079f0c65be749a298fb5d3b6342c99a8d94f' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
