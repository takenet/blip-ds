'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '75c5dec6063af78147be0e0f112d08ac8cfe4a59', role: "rowgroup" }, index.h("slot", { key: 'b936cf889f85603e330c4f6e369a45efbcf13c65' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
