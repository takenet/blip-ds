'use strict';

var index = require('./index-BuAR9UTp.js');

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '91ffdca7e75f5d5687bcc545b83e62028530f238' }, index.h("slot", { key: '9dc7e3c96b42659514be7227f04fb8f65d609fc7' })));
    }
};
TableHeader.style = tableHeaderCss();

exports.bds_table_header = TableHeader;
