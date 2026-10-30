'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c46051adf48d837214adfc5fec87740c040bdb86' }, index.h("div", { key: '4a1388a0b499e0b93adbf13396c8e21f8e3d0a07', class: "warning__body" }, index.h("bds-icon", { key: '7d7569897f365c2f410e64d8ec97be584b25fbd8', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '87aeb566aeaffe521141fa218e2d47499ff90254', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '6b2f1a65e166a69034b0fa85e9febecc55e9b521' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
