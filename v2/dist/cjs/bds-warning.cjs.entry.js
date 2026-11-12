'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f02b3a4953ecc13446496ae0e042392132374b4f' }, index.h("div", { key: '6f8a1961868ee239cf816f8608cb7bbb9d2a0f27', class: "warning__body" }, index.h("bds-icon", { key: '6427033cb84d30f23545d667a4914aac1179c2c9', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'cd1817e7969041c75b1c1ad64e3375524dfc3e55', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '84cdedf0e2533f5ba8b61e3b64f7f04b1fb85ff8' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
