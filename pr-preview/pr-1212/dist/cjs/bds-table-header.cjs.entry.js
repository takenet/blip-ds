'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'b9004081729a361abf5165aa716ad05eaaee113c' }, index.h("slot", { key: '1cbbb403a306f11d89d2e38f7f13cd279305d2d2' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
