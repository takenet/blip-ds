'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a5387e2bc84fa251c21f523da68077ad43ba4a2c' }, index.h("div", { key: '7789b4625f90dba110f1adf47d50fac819127d88', class: "warning__body" }, index.h("bds-icon", { key: '9a3bbce842b1f1d3f4e4bd3a92a83c47944ff24c', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'a50e591cecf3b54eb9e5f85452c4745bb56cb60d', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: 'fd72c60603c479137e2c67bdc673712d5e4e611d' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
