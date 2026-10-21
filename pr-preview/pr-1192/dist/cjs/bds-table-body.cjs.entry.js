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
        return (index.h(index.Host, { key: '0e7147000a811ebb20f03dce729bcd01cc39f45c', class: { host: true, multiple: this.multipleRows } }, index.h("slot", { key: '2d47f3227dbaa62a2a266fc761b7b1bc8951eb63' })));
    }
    get element() { return index.getElement(this); }
};
TableBody.style = tableBodyCss;

exports.bds_table_body = TableBody;
//# sourceMappingURL=bds-table-body.entry.cjs.js.map

//# sourceMappingURL=bds-table-body.cjs.entry.js.map