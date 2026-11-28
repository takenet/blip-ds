import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const tableCss = () => `.sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}`;

const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '683e621f6287fdac69ee1f2f21aaea96b9daedbb', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '5ec386b9ac544971833e69b117c5eba82e543157', class: "bds-table" }, h("slot", { key: '670a91d858767daf21c038a8c20611bcd5add8e9' }))));
    }
};
Table.style = tableCss();

export { Table as bds_table };
