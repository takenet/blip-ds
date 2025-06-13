'use strict';

var index = require('./index-ljSeaagN.js');

const tableHeaderCellCss = ".sc-bds-table-th-h{display:table-cell;padding:0px 8px}.th_cell.sc-bds-table-th{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:64px;gap:8px;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.th_cell--sortable-true.sc-bds-table-th:hover,.th_cell--sortable-false.sc-bds-table-th:hover{cursor:pointer}.justify--left.sc-bds-table-th{-ms-flex-pack:start;justify-content:flex-start}.justify--center.sc-bds-table-th{-ms-flex-pack:center;justify-content:center}.justify--right.sc-bds-table-th{-ms-flex-pack:end;justify-content:flex-end}.dense-th.sc-bds-table-th{min-height:48px;height:auto}.sc-bds-table-th-h:first-child{padding-left:16px}.sc-bds-table-th-h:last-child{padding-right:16px}";

const TableHeaderCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '54aeb6f2c396967fb07a6c6ed4f08207f12bc784' }, index.h("div", { key: '861ca00f8e71ac710193e1db8386905caa589830', class: {
                th_cell: true,
                [`th_cell--sortable-${this.sortable}`]: true,
                'dense-th': this.isDense,
                [`justify--${this.justifyContent}`]: true
            } }, index.h("bds-typo", { key: '3051e67320d051671fbb8820a08e6cfd91b66f56', bold: this.sortable ? 'bold' : 'semi-bold', variant: "fs-14" }, index.h("slot", { key: '736e03ff9633319d70c5c971c4c73e5c5cad4e66' })), this.sortable ? (index.h("bds-icon", { size: "small", name: this.arrow === 'asc' ? 'arrow-down' : this.arrow === 'dsc' ? 'arrow-up' : '' })) : ''
        // <div style={{ width: '20px' }}></div>
        )));
    }
    get element() { return index.getElement(this); }
};
TableHeaderCell.style = tableHeaderCellCss;

exports.bds_table_th = TableHeaderCell;
//# sourceMappingURL=bds-table-th.entry.cjs.js.map

//# sourceMappingURL=bds-table-th.cjs.entry.js.map