'use strict';

var index = require('./index-D_zq0Z7d.js');

const dataTableCss = ":host{display:block;width:100%}:host .table{display:grid;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;color:var(--color-content-default, rgb(40, 40, 40));width:100%;border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06));border-radius:8px;overflow-x:auto;background-color:var(--color-surface-1, rgb(246, 246, 246))}:host .table .thead{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));padding:0 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;text-align:left;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:64px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0 16px;gap:16px;border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}:host .table .body-row:last-child{border-bottom:none}";

const DataTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsTableClick = index.createEvent(this, "bdsTableClick");
        this.bdsTableDelete = index.createEvent(this, "bdsTableDelete");
        this.bdsTableChange = index.createEvent(this, "bdsTableChange");
        this.newTable = [];
        /**
         * For keep the Object of header;
         */
        this.headerData = [];
        /**
         * For keep the Object of table content.
         */
        this.tableData = [];
        /**
         * Prop to activate the possibility of use avatar in any column.
         */
        this.avatar = false;
        /**
         * Prop to activate the possibility of use chip in any column.
         */
        this.chips = false;
        /**
         * Prop to activate the sorting.
         */
        this.sorting = false;
    }
    componentWillLoad() {
        this.getDataFromProprety();
    }
    getDataFromProprety() {
        this.headerData = JSON.parse(this.column);
        this.tableData = JSON.parse(this.options);
    }
    renderArrow(value) {
        if (value) {
            return index.h("bds-icon", { name: "arrow-up", size: "small" });
        }
        else {
            return null;
        }
    }
    async deleteItem(index) {
        const itemDelete = this.tableData.filter((item, i) => i === index && item);
        this.bdsTableDelete.emit(itemDelete[0]);
        this.tableData.splice(index, 1);
        this.tableData = [...this.tableData];
        this.bdsTableChange.emit(this.tableData);
    }
    clickButton(item, index, btn) {
        this.bdsTableClick.emit({ item: item, index: index, nameButton: btn });
    }
    orderColumn(idx) {
        this.headerActive = idx;
        this.sortAscending = this.sortAscending ? false : true;
        if (this.sortAscending === false) {
            this.tableData.sort(function (a, b) {
                return a[idx] > b[idx] ? 1 : -1;
            });
        }
        else {
            this.tableData.sort(function (a, b) {
                return a[idx] > b[idx] ? -1 : 1;
            });
        }
    }
    render() {
        return (index.h(index.Host, { key: '7f2454f8756725687871b31a770917793edd5fa6' }, index.h("table", { key: '405a0dfc1d2bfb67eaaf28c057d4e320abcdd2cb', class: "table" }, index.h("thead", { key: '2c19e79c1182fd68d2b7d26cabf566e0591a0086', class: "thead" }, index.h("tr", { key: '7c4724618ca1a8586f8ec5945ccd8769aa321ee6', class: "header" }, this.headerData.map((item, index$1) => (index.h("th", { class: "header-title", key: index$1 }, this.sorting ? (index.h("bds-typo", { class: "title-click", onClick: () => this.orderColumn(item.value), variant: "fs-14", bold: this.headerActive === `${item.value}` ? 'bold' : 'semi-bold' }, item.heading)) : (index.h("bds-typo", { variant: "fs-14", bold: "semi-bold" }, item.heading)), this.sortAscending === true && this.sorting === true && this.headerActive === `${item.value}` ? (index.h("bds-icon", { class: "header-icon", name: "arrow-up", size: "small" })) : this.sortAscending === false && this.sorting === true && this.headerActive === `${item.value}` ? (index.h("bds-icon", { name: "arrow-down", size: "small" })) : ('')))))), index.h("tbody", { key: 'd7e48288706ce980c386df04bda95d183ff34863' }, this.tableData.map((item, index$1) => (index.h("tr", { class: "body-row", key: index$1 }, this.headerData.map((columnItem, idx) => {
            return (index.h("td", { class: "body-item", key: idx }, this.actionArea && columnItem.editAction ? (index.h("bds-button-icon", { onClick: () => this.clickButton(item, index$1, columnItem.editAction), variant: "secondary", icon: item[`${columnItem.editAction}`], size: "short" })) : (''), this.actionArea && columnItem.deleteAction ? (index.h("bds-button-icon", { onClick: () => this.clickButton(item, index$1, columnItem.deleteAction), variant: "secondary", icon: item[`${columnItem.deleteAction}`], size: "short" })) : (''), this.actionArea && columnItem.customAction ? (index.h("bds-button-icon", { onClick: () => this.clickButton(item, index$1, columnItem.customAction), variant: "secondary", icon: item[`${columnItem.customAction}`], size: "short" })) : (''), this.chips && columnItem.chips ? (index.h("bds-chip-tag", { color: item[`${columnItem.chips}`] ? item[`${columnItem.chips}`] : 'default' }, item[`${columnItem.value}`])) : (''), this.avatar && columnItem.img ? (index.h("bds-avatar", { size: "extra-small", thumbnail: item[`${columnItem.img}`], name: item[`${columnItem.value}`] })) : (''), columnItem.chips ? ('') : (index.h("bds-typo", { variant: "fs-14", bold: this.headerActive === `${columnItem.value}` ? 'bold' : 'regular' }, item[`${columnItem.value}`]))));
        }))))))));
    }
    get el() { return index.getElement(this); }
};
DataTable.style = dataTableCss;

exports.bds_data_table = DataTable;
//# sourceMappingURL=bds-data-table.entry.cjs.js.map

//# sourceMappingURL=bds-data-table.cjs.entry.js.map