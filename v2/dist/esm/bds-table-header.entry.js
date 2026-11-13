import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0ef009c133051295d68e559a8cd227378b7c300e' }, h("slot", { key: 'd65c9837903b1a94a02321d553254ae46895500f' })));
    }
};
TableHeader.style = tableHeaderCss();

export { TableHeader as bds_table_header };
