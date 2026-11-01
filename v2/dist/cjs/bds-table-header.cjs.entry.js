'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2161654772847e325cadbba3041852ab3e955784' }, index.h("slot", { key: '800beb63833778ba58e0b8485f7572a2bcb2bc11' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
