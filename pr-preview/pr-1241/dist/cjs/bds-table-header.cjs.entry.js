'use strict';

var index = require('./index-GTJCA4wH.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8ffba43363ebd9b8749cd61a95b70f8141c20114' }, index.h("slot", { key: 'd8afd4df1616b0f0c9f37cf37aecb48d1213f84f' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
