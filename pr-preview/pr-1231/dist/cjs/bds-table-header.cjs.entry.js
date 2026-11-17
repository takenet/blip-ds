'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7463af5fabf5dfd72559393244e7b33e5c754c99' }, index.h("slot", { key: '2649fff800f5634c5824342023d0879b9a2af3ba' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
