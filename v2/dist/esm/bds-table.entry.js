import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e8a2d2f936c914c36eb4297c46c1e21a9662a292', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '9e40fd5b87fb0ff41bd62f6ac6d77835fb8b54c3', class: "bds-table" }, h("slot", { key: '47c052e26109418e825fe14263230aaeab6b776f' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
