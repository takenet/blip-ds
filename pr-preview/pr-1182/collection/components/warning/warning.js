import { Host, h } from '@stencil/core';
export class Warning {
  render() {
    return (h(Host, null, h("div", { class: "warning__body" }, h("bds-icon", { class: "warning__icon", theme: "solid", size: "small", name: "warning" }), h("bds-typo", { variant: "fs-14", tag: "span", class: "warning__message" }, h("slot", null)))));
  }
  static get is() { return "bds-warning"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["warning.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["warning.css"]
    };
  }
}
