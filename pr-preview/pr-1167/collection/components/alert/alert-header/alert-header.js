import { h } from '@stencil/core';
export class AlertHeader {
  constructor() {
    this.variant = 'system';
    this.icon = null;
  }
  render() {
    return (h("div", { class: {
        alert__header: true,
        [`alert__header--${this.variant}`]: true,
      } }, this.icon && h("bds-icon", { class: "color-icon", theme: "outline", size: "x-large", name: this.icon }), h("bds-typo", { variant: "fs-16", bold: "bold" }, h("slot", null))));
  }
  static get is() { return "bds-alert-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["alert-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["alert-header.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AlertHeaderVariannt",
          "resolved": "\"delete\" | \"error\" | \"system\" | \"warning\"",
          "references": {
            "AlertHeaderVariannt": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant. Entered as one of the variant. Can be one of:\n'system', 'error', 'warning', 'delete';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'system'"
      },
      "icon": {
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
          "text": "used for add icon the header. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "null"
      }
    };
  }
}
