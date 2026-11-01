'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4529681986827fc768e6516fe8dcee879ad57d70', role: "rowgroup" }, index.h("slot", { key: 'c7cfa4939ddbb37c190266eca216db023480a00d' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
