'use strict';

var index = require('./index-GTJCA4wH.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '997df75c2132e45ce7fb7deaf50b9288228d6eb5' }, index.h("slot", { key: '9caa0bf047f28481cebafa1c320b4f5a90dd06c8' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
