import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '2c2915a24ad38ae52379951e4d8a2c29277b432a', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '0165f59677a6ce26f6cce075ed069f2802421039', class: "bds-table" }, h("slot", { key: 'af03dcb34dd9c7ae65499e36a5f34555b1f95ad4' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
