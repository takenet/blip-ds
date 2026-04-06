'use strict';

var index = require('./index-t1DDWEYz.js');

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
        return (index.h(index.Host, { key: 'e6113fa0dff53f53b34d47ac6d77f2ccbd39ba23', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '48ac1586bb5c488b72ea47d8204bf68072a9d1b7' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss;

exports.bds_table_body = TableBody;
//# sourceMappingURL=bds-table-body.entry.cjs.js.map

//# sourceMappingURL=bds-table-body.cjs.entry.js.map