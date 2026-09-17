import { h, Host } from '@stencil/core';
export class TableBody {
  constructor() {
    this.multipleRows = false;
  }
  componentWillLoad() {
    const bdsTable = this.element.closest('bds-table');
    if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
      this.multipleRows = true;
    }
  }
  render() {
    return (h(Host, { class: { host: true, multiple: this.multipleRows } }, h("slot", null)));
  }
  static get is() { return "bds-table-body"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["table-body.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["table-body.css"]
    };
  }
  static get states() {
    return {
      "multipleRows": {}
    };
  }
  static get elementRef() { return "element"; }
}
