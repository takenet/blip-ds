'use strict';

var index = require('./index-DQyYkciT.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ffedff55e685b6509e059dba71107151407e2fa9' }, index.h("div", { key: 'e42b3d9b0ad9ab89a8ea9f924065198162c97cbd', class: "warning__body" }, index.h("bds-icon", { key: 'b1272ca35106a87b7f4edf9e088e1b489699c87f', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'e14b52d6d6abcda83dbbf0b6c7d41ecf036dcba7', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '3018ec6ca5db89c16aa7e1032fb3c0cfc928093b' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map