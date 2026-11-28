'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '91823043f660b5d2d54bbdcfbfc03c6e59b0c738', role: "rowgroup" }, index.h("slot", { key: 'd3b25723ad128eafc808c1643ed759dc50f6c27a' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
