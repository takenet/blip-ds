import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0d3b660adc8fa3bac5cd2eeac45f9dab76ae6670' }, h("slot", { key: '2435e5a1ed4428388a3bc790f97a7021d877c961' })));
    }
};
TableHeader.style = tableHeaderCss();

export { TableHeader as bds_table_header };
