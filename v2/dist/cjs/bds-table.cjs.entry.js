'use strict';

var index = require('./index-GTJCA4wH.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1b8d11343fde82544f6e8f4991e53fd1b1d3e99d', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: 'e90f92b02dfd649fc6b92ef3cd386ef28fe9de43', class: "bds-table" }, index.h("slot", { key: '02175c963884b8a531a8336ab50578f45fda839d' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
