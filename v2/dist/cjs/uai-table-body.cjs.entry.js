'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '09cb77bfbf0b691f3fc8d1ecae1cbdcd77489c6b', role: "rowgroup" }, index.h("slot", { key: '8757823daa480b0b051e8c5a934de37316011b83' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
