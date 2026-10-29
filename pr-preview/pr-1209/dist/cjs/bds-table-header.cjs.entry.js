'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ba34df2bc454317c8a29badaf4818143cae53f33' }, index.h("slot", { key: '9b46751927984075ced46acb0f39f9f736c27cf0' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
