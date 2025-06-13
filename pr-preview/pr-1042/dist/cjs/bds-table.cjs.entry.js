'use strict';

var index = require('./index-DnryYWxm.js');

const tableCss = ".sc-bds-table-h{width:100%;border-radius:8px;background-color:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-3, rgba(0, 0, 0, 0.06))}.bds-table.sc-bds-table{display:table;width:100%;border-spacing:0px;-webkit-box-sizing:border-box;box-sizing:border-box;border-collapse:collapse}.scrollable.sc-bds-table-h{overflow-x:auto}.dense-table.sc-bds-table-h{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}";

const Table = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '73593b51820eefd42fd3f68983de6c4adb62f04e', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, index.h("div", { key: '73368f410301cbcd52efee284ff17f0f41cf8342', class: "bds-table" }, index.h("slot", { key: '195041a15f84223598c501ba652a8bdd4dff9de7' }))));
    }
};
Table.style = tableCss;

exports.bds_table = Table;
//# sourceMappingURL=bds-table.entry.cjs.js.map

//# sourceMappingURL=bds-table.cjs.entry.js.map