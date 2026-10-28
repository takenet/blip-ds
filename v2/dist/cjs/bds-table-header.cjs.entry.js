'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '342d617aa88a33898cb308b543a99044998a431e' }, index.h("slot", { key: 'f1872c9b3551903f7181dda66bfcbe7f1dbd7a65' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
