'use strict';

var index = require('./index-t1DDWEYz.js');

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7b5161825754a09d0ed81913176b57687fbb3e79' }, index.h("slot", { key: '2e56df889f2dc5557a4c98ba7cc77bdc8548dd3a' })));
    }
};
TableHeader.style = tableHeaderCss;

exports.bds_table_header = TableHeader;
//# sourceMappingURL=bds-table-header.entry.cjs.js.map

//# sourceMappingURL=bds-table-header.cjs.entry.js.map