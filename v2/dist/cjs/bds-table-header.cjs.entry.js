'use strict';

var index = require('./index-GTJCA4wH.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2a6feaaa11c6419bf98c8537646c98496af8d919' }, index.h("slot", { key: 'fbbbb2111bffcb045031fb0aaefe38b24fd43e3a' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
