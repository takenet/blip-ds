import { r as registerInstance, h, H as Host, g as getElement } from './index-611fd21e.js';

const tableBodyCss = ".sc-bds-table-body-h{display:table-row-group;height:64px}.multiple.sc-bds-table-body-h{border-bottom:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.sc-bds-table-body-h:last-child{border-bottom:none}";

const TableBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get element() { return getElement(this); }
};
TableBody.style = tableBodyCss;

export { TableBody as bds_table_body };
