'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e079ee6eb124c68c4fed8d991be80c61e80f73cd' }, index.h("slot", { key: '78f851515a1fc1de5919e2e4155cadfca420575e' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
