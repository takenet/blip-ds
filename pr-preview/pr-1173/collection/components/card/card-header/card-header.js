import { h } from '@stencil/core';
export class CardHeader {
  constructor() {
    this.align = 'space-between';
  }
  render() {
    return (h("bds-grid", { xxs: "12", direction: "row", gap: "1", justifyContent: this.align, alignItems: "center" }, h("slot", null)));
  }
  static get is() { return "bds-card-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card-header.css"]
    };
  }
  static get properties() {
    return {
      "align": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "justifyContent",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
          "references": {
            "justifyContent": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop for internal elements alignment. Will follow the same values of css."
        },
        "attribute": "align",
        "reflect": false,
        "defaultValue": "'space-between'"
      }
    };
  }
}
