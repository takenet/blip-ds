'use strict';

var index = require('./index-DQyYkciT.js');

const tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";

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
        return (index.h(index.Host, { key: '81c3774f7076335a6bcd5ff8449794d58c3c12e5', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '5d75e68693711ce87d3b0e6f31c3677c71bdcabf' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss;

exports.bds_table_body = TableBody;
//# sourceMappingURL=bds-table-body.entry.cjs.js.map

//# sourceMappingURL=bds-table-body.cjs.entry.js.map