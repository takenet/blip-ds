'use strict';

var index = require('./index-t1DDWEYz.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7c6c1006bce5bb0976f015664f8bcc2f63bcb52a' }, index.h("div", { key: 'f5b7e642931181c37c2c13de09f65b1749752aac', class: "warning__body" }, index.h("bds-icon", { key: 'ce17467b9be1634b4382adc87676419f88a5ab20', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'ebf10c5e0163dc0e65e784defc6543f8512932a9', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '70f037851be636f7f088d1d7b6fadd31676ac8c8' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map