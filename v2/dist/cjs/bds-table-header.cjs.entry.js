'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c1a98fbedf51f016a28239432fb9bfc4b3e09081' }, index.h("slot", { key: 'ae48f2476f85649d4d4c06cb73c2b5b490fcd03b' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
