'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'be27f4eba195e087f2d25db9db0526ac70bb4b40', role: "rowgroup" }, index.h("slot", { key: 'f470aa537c26b960da061ef2a44a3a08078838d0' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
