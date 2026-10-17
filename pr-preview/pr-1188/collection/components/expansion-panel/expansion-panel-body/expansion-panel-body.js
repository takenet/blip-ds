import { Host, h } from '@stencil/core';
export class ExpansionPanelBody {
  constructor() {
    this.open = false;
    this.text = null;
  }
  render() {
    return (h(Host, null, h("div", { class: "expansion-content", hidden: this.open }, h("div", { class: "with-line" }, h("slot", null), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
  }
  static get is() { return "bds-expansion-panel-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["expansion-panel-body.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["expansion-panel-body.css"]
    };
  }
  static get properties() {
    return {
      "open": {
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
          "text": ""
        },
        "attribute": "open",
        "reflect": false,
        "defaultValue": "false"
      },
      "text": {
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
          "text": ""
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
}
