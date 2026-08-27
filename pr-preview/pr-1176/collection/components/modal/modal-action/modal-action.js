import { h } from '@stencil/core';
export class BdsModalAction {
  render() {
    return (h("div", { class: "modal__action" }, h("slot", null)));
  }
  static get is() { return "bds-modal-action"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["modal-action.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["modal-action.css"]
    };
  }
}
