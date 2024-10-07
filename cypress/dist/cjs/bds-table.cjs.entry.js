'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-border-3, #ededed)}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scrollable = undefined;
    this.collapse = undefined;
    this.denseTable = undefined;
  }
  render() {
    return (index.h(index.Host, { class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { class: "bds-table" }, index.h("slot", null))));
  }
};
Table.style = tableCss;

exports.bds_table = Table;
