import { h, Host } from '@stencil/core';
export class BdsToastContainer {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bds-toast-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["toast-container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["toast-container.css"]
    };
  }
}
