import { Host, h } from '@stencil/core';
export class ExpansionPanelHeader {
  constructor() {
    this.text = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "header" }, h("slot", null)), h("bds-typo", { tag: "p", variant: "fs-12" }, this.text)));
  }
  static get is() { return "bds-expansion-panel-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["expansion-panel-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["expansion-panel-header.css"]
    };
  }
  static get properties() {
    return {
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
        "reflect": false
      }
    };
  }
}
