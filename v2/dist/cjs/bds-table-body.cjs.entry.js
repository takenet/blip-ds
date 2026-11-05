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
        return (index.h(index.Host, { key: '3fe86b6d1e012d00dc6b861285a08a80a518e040', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '3cbd88734299b62f6ff782da5ef7cb889ff12a8a' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss();

exports.bds_table_body = TableBody;
