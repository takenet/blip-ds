'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '78ece7a4e57c04605a83f41083ed3d6c7a5162a1' }, index.h("slot", { key: '98bdde11ad322701b1fc7992d3a913ea40c9c8ef' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
