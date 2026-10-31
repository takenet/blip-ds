'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '37f50ef4ae81350d144a2e187165a217fcaf207b', role: "rowgroup" }, index.h("slot", { key: '9c49d6d7c3e2280b08ac5fe8f762f956e101fe53' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
