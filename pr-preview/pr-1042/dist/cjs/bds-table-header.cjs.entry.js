'use strict';

var index = require('./index-ljSeaagN.js');

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}";

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b58bbb87b5faad8f9effcd1832624b4ace59eee5' }, index.h("slot", { key: '725fed3292166d90056be2337310c6c8a26e2f33' })));
    }
};
TableHeader.style = tableHeaderCss;

exports.bds_table_header = TableHeader;
//# sourceMappingURL=bds-table-header.entry.cjs.js.map

//# sourceMappingURL=bds-table-header.cjs.entry.js.map