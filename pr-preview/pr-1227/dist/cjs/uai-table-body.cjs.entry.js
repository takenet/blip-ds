'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ed1a9a607e9b05ac09a08700496c16ea8b391976', role: "rowgroup" }, index.h("slot", { key: '3c83551c78a8af9361e04ab234d6dee86af0f478' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
