'use strict';

var index = require('./index-Bq8uwDLK.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7b665fb48476aeea2df76284e1156174094cc9df', role: "rowgroup" }, index.h("slot", { key: '2a80ea0e754b6ed3d9e6272523a54d15aedbd819' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
