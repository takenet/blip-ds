'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6b98ca7d42ace8cbcd6f8482de2f6b0b27e36944' }, index.h("slot", { key: '4b8890b910b1afc763f85c0ba931a325f6bf9a54' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
