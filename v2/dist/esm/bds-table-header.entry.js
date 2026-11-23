import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const tableHeaderCss = () => `.sc-bds-table-header-h{display:table-header-group;border-bottom:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2))}`;

const TableHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2a6feaaa11c6419bf98c8537646c98496af8d919' }, h("slot", { key: 'fbbbb2111bffcb045031fb0aaefe38b24fd43e3a' })));
    }
};
TableHeader.style = tableHeaderCss();

export { TableHeader as bds_table_header };
