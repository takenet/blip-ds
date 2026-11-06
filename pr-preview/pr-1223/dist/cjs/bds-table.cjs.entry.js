'use strict';

var index = require('./index-BuAR9UTp.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c30d889630efce18b61f9a50585b8a17c09d85cc', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '25c3dec6e51bee0b0f6e35b2ae6832814c03f61f', class: "bds-table" }, index.h("slot", { key: '58307d2094519031b9a7a51792c82c934df56327' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
