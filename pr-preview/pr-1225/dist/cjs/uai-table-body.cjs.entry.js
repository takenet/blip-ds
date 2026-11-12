'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '490917bd53c25a81f13ea5089028ae535c0df03f', role: "rowgroup" }, index.h("slot", { key: '8387f1ccaa538ad5de0947ca10bc9d2a67fda3a1' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
