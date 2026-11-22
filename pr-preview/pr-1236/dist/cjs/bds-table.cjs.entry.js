'use strict';

var index = require('./index-GTJCA4wH.js');

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9eb896ecd6e0661b869d04cec689a7645bc8ebd9', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '7bc9839d6f9c5ebacd3021edc20411b130030292', class: "bds-table" }, index.h("slot", { key: '758fcfcd3999c90f668e04f70cf1fe63ecb4fd74' }))));
    }
};
Table.style = tableCss();

exports.bds_table = Table;
