'use strict';

var index = require('./index-D_zq0Z7d.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '2da3c710703c1e9bae01c6763ab24d3cf4f64325' }, index.h("div", { key: 'e1c61b4f2b081397c20fa9ee0f54f60aa3a2a259', class: "warning__body" }, index.h("bds-icon", { key: 'e393207758f193ef32257d285913f2fade8c0884', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '752ac0b48c01a3df053fae0a641ab5623da3a5fb', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '06000d1b396177a5a4122dadba1370bc0b945585' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map