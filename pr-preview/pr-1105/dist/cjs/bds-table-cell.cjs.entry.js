'use strict';

var index = require('./index-D_zq0Z7d.js');

const tableCellCss = ".sc-bds-table-cell-h{display:table-cell;padding:0 8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:14px;vertical-align:middle}.cell.sc-bds-table-cell{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:48px;margin:8px 0;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.dense_cell.sc-bds-table-cell{margin:0}.cell_custom.sc-bds-table-cell{gap:8px}.cell_action.sc-bds-table-cell{-ms-flex-direction:row;flex-direction:row;gap:8px}.justify--left.sc-bds-table-cell{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-cell{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-cell{-ms-flex-pack:end;justify-content:flex-end}.sc-bds-table-cell-h:first-child{padding-left:16px}.sc-bds-table-cell-h:last-child{padding-right:16px}";

const TableCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isDense = false;
        this.type = 'text';
        this.sortable = false;
        this.justifyContent = 'left';
    }
    renderContent() {
        return this.type === 'custom' ? (index.h("div", { class: { cell: true, cell_custom: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, index.h("slot", null))) : this.type === 'text' ? (index.h("div", { class: { cell: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, index.h("bds-typo", { variant: "fs-14", bold: this.sortable ? 'bold' : 'regular' }, index.h("slot", null)))) : this.type === 'action' ? (index.h("div", { class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, index.h("slot", null))) : this.type === 'collapse' ? (index.h("td", { colSpan: 2, class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, index.h("slot", null))) : (index.h("slot", null));
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && bdsTable.getAttribute('dense-table') === 'true') {
            this.isDense = true;
        }
    }
    render() {
        return index.h(index.Host, { key: '308fc20da6c74c8808a4eca46cc3768985a73419' }, this.renderContent());
    }
    get element() { return index.getElement(this); }
};
TableCell.style = tableCellCss;

exports.bds_table_cell = TableCell;
//# sourceMappingURL=bds-table-cell.entry.cjs.js.map

//# sourceMappingURL=bds-table-cell.cjs.entry.js.map