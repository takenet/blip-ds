'use strict';

var index = require('./index-GTJCA4wH.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0f4b0f2d4c2b4db81f89bfdf63e0d91d9ffdf264' }, index.h("slot", { key: '95a0d5090355731295bf8c9a730e35fe6b9c5e04' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
