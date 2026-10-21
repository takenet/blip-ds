'use strict';

var index = require('./index-DQyYkciT.js');

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8ebab52369d70d5c5be077fdf35f46a49bb6748d' }, index.h("slot", { key: '297bef0fa24d0a2e7c614f5d0ee5db188c7ec7c2' })));
    }
};
TableHeader.style = tableHeaderCss;

exports.bds_table_header = TableHeader;
//# sourceMappingURL=bds-table-header.entry.cjs.js.map

//# sourceMappingURL=bds-table-header.cjs.entry.js.map