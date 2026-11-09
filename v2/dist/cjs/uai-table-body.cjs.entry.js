'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6ee670068e5ff71017ce17f87269c33231a66707', role: "rowgroup" }, index.h("slot", { key: 'b80013ae67b61e8e63cf06b6109e606e214798dd' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
