import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c77c7e84ab9269c0ea2034d20a3cfb5d04b03548', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'ddceb04a7e2e46c68474747bc01088fd4c8e5de3', class: "bds-table" }, h("slot", { key: '4a5cdefef3c495a7a0c483120dab4c8a6ff0cb76' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
