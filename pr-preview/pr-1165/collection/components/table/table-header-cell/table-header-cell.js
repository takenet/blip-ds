import { h, Host } from '@stencil/core';
export class TableHeaderCell {
  constructor() {
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
    return (h(Host, null, h("div", { class: {
        th_cell: true,
        [`th_cell--sortable-${this.sortable}`]: true,
        'dense-th': this.isDense,
        [`justify--${this.justifyContent}`]: true
      } }, h("bds-typo", { bold: this.sortable ? 'bold' : 'semi-bold', variant: "fs-14" }, h("slot", null)), this.sortable ? (h("bds-icon", { size: "small", name: this.arrow === 'asc' ? 'arrow-down' : this.arrow === 'dsc' ? 'arrow-up' : '' })) : ''
    // <div style={{ width: '20px' }}></div>
    )));
  }
  static get is() { return "bds-table-th"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["table-header-cell.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["table-header-cell.css"]
    };
  }
  static get properties() {
    return {
      "sortable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "sortable",
        "reflect": false,
        "defaultValue": "false"
      },
      "arrow": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "arrow",
        "reflect": false,
        "defaultValue": "''"
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "JustifyContent",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {
            "JustifyContent": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "justify-content",
        "reflect": false,
        "defaultValue": "'left'"
      }
    };
  }
  static get states() {
    return {
      "isDense": {}
    };
  }
  static get elementRef() { return "element"; }
}
