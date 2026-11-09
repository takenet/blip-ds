'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiTableHeaderCss = () => `:host{display:block}::slotted(uai-table-row:not([variant=bar])){min-height:0}`;

const UaiTableHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '01cfacef061c956a57f8f82e3ac8b059e1e5b745', role: "rowgroup" }, index.h("slot", { key: 'f132e9708e7c93bfcc43099e272eef307cfa6142' })));
    }
};
UaiTableHeader.style = uaiTableHeaderCss();

exports.uai_table_header = UaiTableHeader;
