import { h, Host } from '@stencil/core';
export class Table {
  constructor() {
    this.scrollable = undefined;
    this.collapse = undefined;
    this.denseTable = undefined;
  }
  render() {
    return (h(Host, { class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { class: "bds-table" }, h("slot", null))));
  }
  static get is() { return "bds-table"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["table.css"]
    };
  }
  static get properties() {
    return {
      "scrollable": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies whether the table is scrollable or not."
        },
        "attribute": "scrollable",
        "reflect": true
      },
      "collapse": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Specifies whether the table is scrollable or not."
        },
        "attribute": "collapse",
        "reflect": true
      },
      "denseTable": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Determines if the table has a higher content density, typically resulting in more compact rows and cells."
        },
        "attribute": "dense-table",
        "reflect": true
      }
    };
  }
}
