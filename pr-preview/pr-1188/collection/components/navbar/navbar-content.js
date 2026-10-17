import { h, Host } from '@stencil/core';
export class NavbarContent {
  render() {
    return (h(Host, { class: { NavbarContent: true } }, h("slot", null)));
  }
  static get is() { return "bds-navbar-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["navbar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["navbar.css"]
    };
  }
  static get elementRef() { return "hostElement"; }
}
