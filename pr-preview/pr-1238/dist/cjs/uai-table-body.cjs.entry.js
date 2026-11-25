'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiTableBodyCss = () => `:host{display:block}`;

const UaiTableBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '62bb688c84cf2014089909c56adbfa5883f2808d', role: "rowgroup" }, index.h("slot", { key: 'e31fd63797320b43b3ffc49249a42733a2ddf0ca' })));
    }
};
UaiTableBody.style = uaiTableBodyCss();

exports.uai_table_body = UaiTableBody;
