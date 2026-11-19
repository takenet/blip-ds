'use strict';

var index = require('./index-Bq8uwDLK.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5013983a8b228aad50af73ad8d8ac9f2e36ebd91', role: "rowgroup" }, index.h("slot", { key: '06f1aa7bcebdd6a7057d3bec40e838e9562039ff' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
