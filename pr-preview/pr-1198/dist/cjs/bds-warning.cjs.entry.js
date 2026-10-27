'use strict';

var index = require('./index-DQyYkciT.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e4ed013a5d12762984bda876b82fc58a3815ec67' }, index.h("div", { key: '2d6fd5dfb9a78afdf1380638874ee7c85dc08918', class: "warning__body" }, index.h("bds-icon", { key: '3d9769f1487396a048963ce817c7c8979046dd95', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'e67eb29dba2b0f95c10772eefa4f3d1dc878c3ba', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '3cbffa1d41a04921e55d148d3031261fb6ed6aeb' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map