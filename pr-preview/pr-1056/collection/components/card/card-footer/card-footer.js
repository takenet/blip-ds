import { h } from '@stencil/core';
export class CardFooter {
  constructor() {
    this.align = 'flex-end';
  }
  render() {
    return (h("bds-grid", { xxs: "12", direction: "row", gap: "2", justifyContent: this.align }, h("slot", null)));
  }
  static get is() { return "bds-card-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card-footer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card-footer.css"]
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
        "defaultValue": "'flex-end'"
      }
    };
  }
}
