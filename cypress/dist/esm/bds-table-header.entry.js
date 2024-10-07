import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const tableHeaderCss = ".sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, #c9c9c9)}";

const TableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TableHeader.style = tableHeaderCss;

export { TableHeader as bds_table_header };
