import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8663ab70520625def0dfac266097041e5aed85e6', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '466669e42d46434e57b56800fed286134cd0e9c3', class: "bds-table" }, h("slot", { key: 'd549a227708a406b30b76531bcaac47e4885f2d8' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
