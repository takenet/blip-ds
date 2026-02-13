import { h } from '@stencil/core';
export class AlertBody {
  render() {
    return (h("div", { class: "alert__body" }, h("bds-typo", { variant: "fs-14", bold: "regular", slot: "body" }, h("slot", null))));
  }
  static get is() { return "bds-alert-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["alert-body.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["alert-body.css"]
    };
  }
}
