'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(${index.transformTag("uai-table-row")}:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ec9efcfb46af2084a8f6b6126b4f7400a310f62c', role: "rowgroup" }, index.h("slot", { key: '921d8264f48a0b0ed7bcbf5b0a22189334d425b5' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
