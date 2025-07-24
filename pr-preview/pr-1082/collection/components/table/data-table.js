import { Host, h } from '@stencil/core';
export class DataTable {
  constructor() {
    this.newTable = [];
    this.headerData = [];
    this.tableData = [];
    this.sortAscending = undefined;
    this.headerActive = undefined;
    this.options = undefined;
    this.column = undefined;
    this.avatar = false;
    this.chips = false;
    this.actionArea = undefined;
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
    return (h(Host, null, h("table", { class: "table" }, h("thead", { class: "thead" }, h("tr", { class: "header" }, this.headerData.map((item, index) => (h("th", { class: "header-title", key: index }, this.sorting ? (h("bds-typo", { class: "title-click", onClick: () => this.orderColumn(item.value), variant: "fs-14", bold: this.headerActive === `${item.value}` ? 'bold' : 'semi-bold' }, item.heading)) : (h("bds-typo", { variant: "fs-14", bold: "semi-bold" }, item.heading)), this.sortAscending === true && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { class: "header-icon", name: "arrow-up", size: "small" })) : this.sortAscending === false && this.sorting === true && this.headerActive === `${item.value}` ? (h("bds-icon", { name: "arrow-down", size: "small" })) : ('')))))), h("tbody", null, this.tableData.map((item, index) => (h("tr", { class: "body-row", key: index }, this.headerData.map((columnItem, idx) => {
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
        "attribute": "options",
        "reflect": false
      },
      "column": {
        "type": "string",
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
        "attribute": "column",
        "reflect": false
      },
      "avatar": {
        "type": "boolean",
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
        "attribute": "avatar",
        "reflect": false,
        "defaultValue": "false"
      },
      "chips": {
        "type": "boolean",
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
        "attribute": "chips",
        "reflect": false,
        "defaultValue": "false"
      },
      "actionArea": {
        "type": "boolean",
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
        "attribute": "action-area",
        "reflect": false
      },
      "sorting": {
        "type": "boolean",
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
        "attribute": "sorting",
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
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
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
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
