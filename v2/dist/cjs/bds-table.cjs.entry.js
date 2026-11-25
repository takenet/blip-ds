'use strict';

var index = require('./index-GTJCA4wH.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '225c53c8d27d236b0c8aa6b7158877b4e00d38e8', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: 'e7a63eae70b16416470eb5a13057793907109b96', class: "bds-table" }, index.h("slot", { key: '830a22db2fd37c8b265b6ff6eb0860b31a5e250f' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
