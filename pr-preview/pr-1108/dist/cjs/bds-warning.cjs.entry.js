'use strict';

var index = require('./index-D_zq0Z7d.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1bb2ffef828bb865e3a6b43775800a3f416d720b' }, index.h("div", { key: '7c39ce68fa201a1eef6dd3d833e9d5052ffe97ae', class: "warning__body" }, index.h("bds-icon", { key: '629294c3ff2c5468b6a63dc310854e17dca588eb', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '6b99fddb8d33f9e49268a0f081ad184390a949ab', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: 'aa44a6355ec409791eb9029d71d20217cb4a4c4a' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map