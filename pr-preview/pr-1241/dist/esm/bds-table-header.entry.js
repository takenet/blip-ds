import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8ffba43363ebd9b8749cd61a95b70f8141c20114' }, h("slot", { key: 'd8afd4df1616b0f0c9f37cf37aecb48d1213f84f' })));
    }
};
TableHeader.style = tableHeaderCss();

export { TableHeader as bds_table_header };
