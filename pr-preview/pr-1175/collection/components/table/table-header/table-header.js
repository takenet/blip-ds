import { h, Host } from '@stencil/core';
export class TableHeader {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "bds-table-header"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["table-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["table-header.css"]
    };
  }
}
