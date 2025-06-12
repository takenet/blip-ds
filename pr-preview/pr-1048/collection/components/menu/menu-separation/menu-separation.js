import { h } from '@stencil/core';
export class BdsMenuSeparation {
  constructor() {
    this.value = null;
    this.size = null;
  }
  render() {
    return (h("div", { class: {
        menuseparation: true,
        [`menuseparation__${this.size}`]: true,
      } }, this.value && (h("bds-typo", { class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { class: "dividor-item" })));
  }
  static get is() { return "bds-menu-separation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-separation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-separation.css"]
    };
  }
  static get properties() {
    return {
      "value": {
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
          "text": "Value. Used to insert a title to the divider."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "null"
      },
      "size": {
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
          "text": "Size. Used to set the size of the divider."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
}
