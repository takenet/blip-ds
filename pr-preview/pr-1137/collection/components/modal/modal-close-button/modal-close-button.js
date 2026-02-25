import { h } from '@stencil/core';
export class BdsModalCloseButton {
  constructor() {
    this.active = true;
  }
  render() {
    return (h("div", { class: {
        'modal__close__button-icon': true,
        'modal__close__button-icon--active': this.active,
      } }, h("bds-icon", { size: "medium", name: "close" })));
  }
  static get is() { return "bds-modal-close-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["modal-close-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["modal-close-button.css"]
    };
  }
  static get properties() {
    return {
      "active": {
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
          "text": "Used to hide or show the close button"
        },
        "attribute": "active",
        "reflect": true,
        "defaultValue": "true"
      }
    };
  }
}
