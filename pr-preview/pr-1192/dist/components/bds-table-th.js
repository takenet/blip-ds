import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-R_xz97kF.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const tableHeaderCellCss = ".sc-bds-table-th-h{display:table-cell;padding:0px 8px}.th_cell.sc-bds-table-th{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:64px;gap:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.th_cell--sortable-true.sc-bds-table-th:hover,.th_cell--sortable-false.sc-bds-table-th:hover{cursor:pointer}.justify--left.sc-bds-table-th{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-th{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-th{-ms-flex-pack:end;justify-content:flex-end}.dense-th.sc-bds-table-th{min-height:48px;height:auto}.sc-bds-table-th-h:first-child{padding-left:16px}.sc-bds-table-th-h:last-child{padding-right:16px}";

const TableHeaderCell = /*@__PURE__*/ proxyCustomElement(class TableHeaderCell extends H {
    constructor() {
        super();
        this.__registerHost();
        this.isDense = false;
        this.sortable = false;
        this.arrow = '';
        this.justifyContent = 'left';
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
            this.isDense = true;
        }
    }
    render() {
        return (h(Host, { key: 'a286b5a66d8d1e4dd575078f8fcdc83af79ab7f1' }, h("div", { key: 'c6119fde2c112323965af9699cbeca148395b48a', class: {
                th_cell: true,
                [`th_cell--sortable-${this.sortable}`]: true,
                'dense-th': this.isDense,
                [`justify--${this.justifyContent}`]: true
            } }, h("bds-typo", { key: '4bc06f86385f02e753ee782ed26e7e41757e52ec', bold: this.sortable ? 'bold' : 'semi-bold', variant: "fs-14" }, h("slot", { key: 'd29b72133c440bbf490de15901ded6b78b7aad09' })), this.sortable ? (h("bds-icon", { size: "small", name: this.arrow === 'asc' ? 'arrow-down' : this.arrow === 'dsc' ? 'arrow-up' : '' })) : ''
        // <div style={{ width: '20px' }}></div>
        )));
    }
    get element() { return this; }
    static get style() { return tableHeaderCellCss; }
}, [6, "bds-table-th", {
        "sortable": [4],
        "arrow": [1],
        "justifyContent": [1, "justify-content"],
        "isDense": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-table-th", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-table-th":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableHeaderCell);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsTableTh = TableHeaderCell;
const defineCustomElement = defineCustomElement$1;

export { BdsTableTh, defineCustomElement };
//# sourceMappingURL=bds-table-th.js.map

//# sourceMappingURL=bds-table-th.js.map