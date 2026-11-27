'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '25e1f8e8a6dbca10cf786bbb730f10927c08ef3e', role: "rowgroup" }, index.h("slot", { key: '69251264f374f014342ac19b8bda986833b8d9cf' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
