'use strict';

var index = require('./index-DQyYkciT.js');

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1e60f1072a4742046bf3a427138a03c5bdb3fc5d' }, index.h("slot", { key: 'b0daae57b5a66f40c317a8afecfc0f377a76bdfa' })));
    }
};
TableHeader.style = tableHeaderCss;

exports.bds_table_header = TableHeader;
//# sourceMappingURL=bds-table-header.entry.cjs.js.map

//# sourceMappingURL=bds-table-header.cjs.entry.js.map