import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '7276d8fe648ebe0ab510c295f321a7c7c16e7f59', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '8fef6f1b43edf79f455d3a30fff42307ddb810d3', class: "bds-table" }, h("slot", { key: 'a75a6340463615dae4ebd3328d5ead23b3cc4cea' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
