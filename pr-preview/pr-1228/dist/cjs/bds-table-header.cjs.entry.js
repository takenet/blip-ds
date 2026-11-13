'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0ef009c133051295d68e559a8cd227378b7c300e' }, index.h("slot", { key: 'd65c9837903b1a94a02321d553254ae46895500f' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
