'use strict';

var index = require('./index-D_zq0Z7d.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#f8fbfb;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '088aa4e15b700fec87581ad3a6094fe89552a415' }, index.h("div", { key: '8120a90aa0c30dc99a1dc8ee47b29e7f1a2a7b98', class: "warning__body" }, index.h("bds-icon", { key: '4b586963f11406e016afed439bb297472579d235', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'e66fa1878253b7b4e291f15aedfb0efd26dd4da9', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: 'd7526ba9710b18ac31bcd0cd165506fbfd7144cf' })))));
    }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
//# sourceMappingURL=bds-warning.entry.cjs.js.map

//# sourceMappingURL=bds-warning.cjs.entry.js.map