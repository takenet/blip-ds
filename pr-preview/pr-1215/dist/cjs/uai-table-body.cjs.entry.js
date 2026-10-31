'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1afd1d4078e6add9627b72fda216e23cbfd82779', role: "rowgroup" }, index.h("slot", { key: 'c733a75ebd70faea3ff0a72566cbb9e458205067' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
