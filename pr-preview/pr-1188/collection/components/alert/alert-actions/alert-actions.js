import { h } from '@stencil/core';
export class AlertActions {
  render() {
    return (h("div", { class: "alert__actions" }, h("slot", null)));
  }
  static get is() { return "bds-alert-actions"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["alert-actions.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["alert-actions.css"]
    };
  }
}
