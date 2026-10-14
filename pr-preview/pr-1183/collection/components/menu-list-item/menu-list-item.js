import { Host, h } from '@stencil/core';
export class MenuListItem {
  constructor() {
    this.color = undefined;
    this.icon = undefined;
  }
  render() {
    const color = this.color || 'currentColor';
    return (h(Host, { role: "button" }, h("div", { class: "menu-list-item" }, h("bds-icon", { color: color, name: this.icon }), h("bds-typo", { class: "menu-list-item__text", variant: "fs-10" }, h("slot", null)))));
  }
  static get is() { return "bds-menu-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-list-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-list-item.css"]
    };
  }
  static get properties() {
    return {
      "color": {
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
        "attribute": "color",
        "reflect": false
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "used for add icon in input left. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": true
      }
    };
  }
}
