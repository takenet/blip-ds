'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c4488423dd45ba10cc0daaf82696822c6cdacb20', role: "rowgroup" }, index.h("slot", { key: '68e293334fb04d8ad5988767b5b9e6d8e663f50a' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
