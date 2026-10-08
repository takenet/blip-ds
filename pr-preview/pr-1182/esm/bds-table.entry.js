import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scrollable = undefined;
    this.collapse = undefined;
    this.denseTable = undefined;
  }
  render() {
    return (h(Host, { class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { class: "bds-table" }, h("slot", null))));
  }
};
Table.style = tableCss;

export { Table as bds_table };
