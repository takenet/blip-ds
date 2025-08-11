import { h } from '@stencil/core';
export class CardTitle {
  constructor() {
    this.text = undefined;
  }
  render() {
    return (h("bds-typo", { variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
  }
  static get is() { return "bds-card-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card-title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card-title.css"]
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
          "text": "Set the card title."
        },
        "attribute": "text",
        "reflect": false
      }
    };
  }
}
