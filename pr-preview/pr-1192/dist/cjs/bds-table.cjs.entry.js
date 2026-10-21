'use strict';

var index = require('./index-DQyYkciT.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c4d6371efb5f765baa3f758b43d55ef16c42f812', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: 'bb7ee29ffc8af22577f78764ac4551af30beb688', class: "bds-table" }, index.h("slot", { key: 'c0dffe9ddc8d39bb9061e621b4512d381c589c1f' }))));
    }
};
Table.style = tableCss;

exports.bds_table = Table;
//# sourceMappingURL=bds-table.entry.cjs.js.map

//# sourceMappingURL=bds-table.cjs.entry.js.map