import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '6999d7021497316996f7e34080311b66c046bcd4', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '79da65ed7f6c83cf25876b4dae609993d80724ca', class: "bds-table" }, h("slot", { key: 'bcdb74030d2e2373f05fa2b8a5a02c4231f57fe3' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
