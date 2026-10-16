import { Host, h } from "@stencil/core";
export class DataTable {
    constructor() {
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
        return (h(Host, { key: '04e4f3fcbb9828e1e92d49d725ffc1e58987052d' }, h("table", { key: '5bca768acea5a354b1f02d8db23ff78125b098f5', class: "table" }, h("thead", { key: 'b1beeb7b1b90b3190623bcb3d1389bf52232be71', class: "thead" }, h("tr", { key: 'be204015a9bb4e4d83f913887620ea89d63ed98d', class: "header" }, this.headerData.map((item, index) => (h("th", { class: "header-title", key: index }, this.sorting ? (h("bds-typo", { class: "title-click", onClick: () => this.orderColumn(item.value), variant: "fs-14", bold: this.headerActive === `${item.value}` ? 'bold' : 'semi-bold' }, item.heading)) : (h("bds-typo", { variant: "fs-14", bold: "semi-bold" }, item.heading)), this.sortAscending === true && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { class: "header-icon", name: "arrow-up", size: "small" })) : this.sortAscending === false && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { name: "arrow-down", size: "small" })) : ('')))))), h("tbody", { key: 'd3bf34be322ca3a1c723b534520c98c041ec4e8a' }, this.tableData.map((item, index) => (h("tr", { class: "body-row", key: index }, this.headerData.map((columnItem, idx) => {
            return (h("td", { class: "body-item", key: idx }, this.actionArea && columnItem.editAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.editAction), variant: "secondary", icon: item[`${columnItem.editAction}`], size: "short" })) : (''), this.actionArea && columnItem.deleteAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.deleteAction), variant: "secondary", icon: item[`${columnItem.deleteAction}`], size: "short" })) : (''), this.actionArea && columnItem.customAction ? (h("bds-button-icon", { onClick: () => this.clickButton(item, index, columnItem.customAction), variant: "secondary", icon: item[`${columnItem.customAction}`], size: "short" })) : (''), this.chips && columnItem.chips ? (h("bds-chip-tag", { color: item[`${columnItem.chips}`] ? item[`${columnItem.chips}`] : 'default' }, item[`${columnItem.value}`])) : (''), this.avatar && columnItem.img ? (h("bds-avatar", { size: "extra-small", thumbnail: item[`${columnItem.img}`], name: item[`${columnItem.value}`] })) : (''), columnItem.chips ? ('') : (h("bds-typo", { variant: "fs-14", bold: this.headerActive === `${columnItem.value}` ? 'bold' : 'regular' }, item[`${columnItem.value}`]))));
        }))))))));
    }
    static get is() { return "bds-data-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["data-table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["data-table.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to recive the content of the table."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "column": {
                "type": "string",
                "attribute": "column",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to recive the header and configuration of table."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "avatar": {
                "type": "boolean",
                "attribute": "avatar",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to activate the possibility of use avatar in any column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "chips": {
                "type": "boolean",
                "attribute": "chips",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to activate the possibility of use chip in any column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "actionArea": {
                "type": "boolean",
                "attribute": "action-area",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to activate the possibility of use chip in any column."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "sorting": {
                "type": "boolean",
                "attribute": "sorting",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop to activate the sorting."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "newTable": {},
            "headerData": {},
            "tableData": {},
            "sortAscending": {},
            "headerActive": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsTableClick",
                "name": "bdsTableClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    item: {\n      [key: string]: any;\n    }; index: number; nameButton: string\n  }",
                    "resolved": "{ item: { [key: string]: any; }; index: number; nameButton: string; }",
                    "references": {}
                }
            }, {
                "method": "bdsTableDelete",
                "name": "bdsTableDelete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "bdsTableChange",
                "name": "bdsTableChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }[]",
                    "resolved": "{ [key: string]: any; }[]",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "deleteItem": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=data-table.js.map
