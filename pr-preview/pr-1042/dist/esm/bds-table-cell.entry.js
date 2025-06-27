import { r as registerInstance, h, H as Host, a as getElement } from './index-C3J6Z5OX.js';

const tableCellCss = ".sc-bds-table-cell-h{display:table-cell;padding:0 8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:14px;vertical-align:middle}.cell.sc-bds-table-cell{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:48px;margin:8px 0;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.dense_cell.sc-bds-table-cell{margin:0}.cell_custom.sc-bds-table-cell{gap:8px}.cell_action.sc-bds-table-cell{-ms-flex-direction:row;flex-direction:row;gap:8px}.justify--left.sc-bds-table-cell{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-cell{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-cell{-ms-flex-pack:end;justify-content:flex-end}.sc-bds-table-cell-h:first-child{padding-left:16px}.sc-bds-table-cell-h:last-child{padding-right:16px}";

const TableCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDense = false;
        this.type = 'text';
        this.sortable = false;
        this.justifyContent = 'left';
    }
    renderContent() {
        return this.type === 'custom' ? (h("div", { class: { cell: true, cell_custom: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'text' ? (h("div", { class: { cell: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("bds-typo", { variant: "fs-14", bold: this.sortable ? 'bold' : 'regular' }, h("slot", null)))) : this.type === 'action' ? (h("div", { class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'collapse' ? (h("td", { colSpan: 2, class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : (h("slot", null));
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && bdsTable.getAttribute('dense-table') === 'true') {
            this.isDense = true;
        }
    }
    render() {
        return h(Host, { key: 'c21e28891c7408676f68e8e9608629f518a5ae10' }, this.renderContent());
    }
    get element() { return getElement(this); }
};
TableCell.style = tableCellCss;

export { TableCell as bds_table_cell };
//# sourceMappingURL=bds-table-cell.entry.js.map

//# sourceMappingURL=bds-table-cell.entry.js.map