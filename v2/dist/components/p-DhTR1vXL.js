import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const tableCellCss = ".sc-bds-table-cell-h{display:table-cell;padding:0 8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:14px;vertical-align:middle}.cell.sc-bds-table-cell{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:48px;margin:8px 0;color:var(--color-content-default, rgb(40, 40, 40));font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.dense_cell.sc-bds-table-cell{margin:0}.cell_custom.sc-bds-table-cell{gap:8px}.cell_action.sc-bds-table-cell{-ms-flex-direction:row;flex-direction:row;gap:8px}.justify--left.sc-bds-table-cell{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-cell{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-cell{-ms-flex-pack:end;justify-content:flex-end}.sc-bds-table-cell-h:first-child{padding-left:16px}.sc-bds-table-cell-h:last-child{padding-right:16px}";

const TableCell = /*@__PURE__*/ proxyCustomElement(class TableCell extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return h(Host, { key: '308fc20da6c74c8808a4eca46cc3768985a73419' }, this.renderContent());
    }
    get element() { return this; }
    static get style() { return tableCellCss; }
}, [6, "bds-table-cell", {
        "type": [1],
        "sortable": [4],
        "justifyContent": [1, "justify-content"],
        "isDense": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-table-cell", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-table-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableCell);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { TableCell as T, defineCustomElement as d };
//# sourceMappingURL=p-DhTR1vXL.js.map

//# sourceMappingURL=p-DhTR1vXL.js.map