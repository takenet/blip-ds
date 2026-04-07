import { Host, h } from '@stencil/core';
export class ChipTag {
  constructor() {
    this.icon = undefined;
    this.color = 'default';
    this.dataTest = null;
  }
  render() {
    return (h(Host, null, h("div", { class: {
        chip_tag: true,
        [`chip_tag--${this.color}`]: true,
      }, "data-test": this.dataTest }, this.icon && (h("div", { class: "chip_tag--icon" }, h("bds-icon", { size: "x-small", name: this.icon }))), h("div", { class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", null))))));
  }
  static get is() { return "bds-chip-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chip-tag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chip-tag.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "used for add icon in left container. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ColorChipTag",
          "resolved": "\"danger\" | \"default\" | \"disabled\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
          "references": {
            "ColorChipTag": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "used for change the color. Uses one of them."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "dataTest": {
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
          "text": "Data test is the prop to specifically test the component action object."
        },
        "attribute": "data-test",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
}
