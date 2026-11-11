'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '4b98f8a759909077efeba4e8c9e74dfecfb598fc', role: "rowgroup" }, index.h("slot", { key: 'b605874969a19592c22a05be099a2ca9b6326302' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
