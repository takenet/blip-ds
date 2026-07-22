import { Host, h } from '@stencil/core';
export class MenuList {
  render() {
    return (h(Host, null, h("div", { class: "menu-list" }, h("div", { class: "menu-list__left" }), h("slot", null), h("div", { class: "menu-list__right" }))));
  }
  static get is() { return "bds-menu-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-list.css"]
    };
  }
}
