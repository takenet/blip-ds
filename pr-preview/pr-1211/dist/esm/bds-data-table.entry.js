import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const dataTableCss = () => `:host{display:block;width:100%}:host .table{display:grid;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;color:var(--color-content-default, rgb(40, 40, 40));width:100%;border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06));border-radius:8px;overflow-x:auto;background-color:var(--color-surface-1, rgb(246, 246, 246))}:host .table .thead{border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));padding:0 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;text-align:left;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:64px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0 16px;gap:16px;border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}:host .table .body-row:last-child{border-bottom:none}`;

const DataTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bdsTableClick = createEvent(this, "bdsTableClick");
        this.bdsTableDelete = createEvent(this, "bdsTableDelete");
        this.bdsTableChange = createEvent(this, "bdsTableChange");
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
            return h("bds-icon", { name: "arrow-up", size: "small" });
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
        return (h(Host, { key: 'dd69d8842f04d915b2ed0ec2a0b475e85460bb1c' }, h("table", { key: 'df6c4d41a58a58be382529c4061f877a18100b1a', class: "table" }, h("thead", { key: 'eb71f1a9c32d3491f99b5aa23de06a7982b9fa82', class: "thead" }, h("tr", { key: '7a643d4d4c4c3fe1152e864b7b8ff363b4aea23f', class: "header" }, this.headerData.map((item, index) => (h("th", { class: "header-title", key: index }, this.sorting ? (h("bds-typo", { class: "title-click", onClick: () => this.orderColumn(item.value), variant: "fs-14", bold: this.headerActive === `${item.value}` ? 'bold' : 'semi-bold' }, item.heading)) : (h("bds-typo", { variant: "fs-14", bold: "semi-bold" }, item.heading)), this.sortAscending === true && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { class: "header-icon", name: "arrow-up", size: "small" })) : this.sortAscending === false && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { name: "arrow-down", size: "small" })) : ('')))))), h("tbody", { key: '9dd7a1977d2335eea74d626cdc759eed32f295de' }, this.tableData.map((item, index) => (h("tr", { class: "body-row", key: index }, this.headerData.map((columnItem, idx) => {
            return (h("td", { class: "body-item", key: idx }, this.actionArea && columnItem.editAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.editAction), variant: "secondary", icon: item[`${columnItem.editAction}`], size: "short" })) : (''), this.actionArea && columnItem.deleteAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.deleteAction), variant: "secondary", icon: item[`${columnItem.deleteAction}`], size: "short" })) : (''), this.actionArea && columnItem.customAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.customAction), variant: "secondary", icon: item[`${columnItem.customAction}`], size: "short" })) : (''), this.chips && columnItem.chips ? (h("bds-chip-tag", { color: item[`${columnItem.chips}`] ? item[`${columnItem.chips}`] : 'default' }, item[`${columnItem.value}`])) : (''), this.avatar && columnItem.img ? (h("bds-avatar", { size: "extra-small", thumbnail: item[`${columnItem.img}`], name: item[`${columnItem.value}`] })) : (''), columnItem.chips ? ('') : (h("bds-typo", { variant: "fs-14", bold: this.headerActive === `${columnItem.value}` ? 'bold' : 'regular' }, item[`${columnItem.value}`]))));
        }))))))));
    }
    get el() { return getElement(this); }
};
DataTable.style = dataTableCss();

export { DataTable as bds_data_table };
