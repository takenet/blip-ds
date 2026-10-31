'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7c0dcb63af0a6f165287710d4039aa9d4c8d9069' }, index.h("slot", { key: 'e81d6ae4657448a186e8a007abfb5ce256976469' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
