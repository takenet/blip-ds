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
        return (index.h(index.Host, { key: 'ef470125c4c96c733a2d000e60b32c638a9054f9', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '401f22f538bbf68f0fb8d8564d5f3e1c145bf40b' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss();

exports.bds_table_body = TableBody;
