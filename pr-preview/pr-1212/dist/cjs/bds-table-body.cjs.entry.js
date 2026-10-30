'use strict';

var index = require('./index-BuAR9UTp.js');

const tableBodyCss = () => `.sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}`;

const TableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e99e1c8f890579b66685381a30eaa0a0ca26db73', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '88dc9fda65c1e610dbfecbbc854831f5b5c16f39' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss();

exports.bds_table_body = TableBody;
