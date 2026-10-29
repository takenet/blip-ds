'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4a7d6b430cb9f45fc4f44542f297f27db41088f5' }, index.h("slot", { key: 'adb1f62dfd906403f320f8f031c8de5281f1502a' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
