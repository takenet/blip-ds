import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '36271f1f5d82c61fbe1c08a5a61e9c7108c153bc', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '9de8cbb07f7778651af71f7a6fd998636565a6f8', class: "bds-table" }, h("slot", { key: 'ed8fd92954396a81a8f0ec465af1a10d63a86dd5' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
