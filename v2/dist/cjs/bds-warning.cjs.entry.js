'use strict';

var index = require('./index-BqjYThoc.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8a3ffdf11b2ab3ff4bb1d1974a8c8c071a9bcdf4' }, index.h("div", { key: '53fd550544b0a6905d094a6246f90a07adac5510', class: "warning__body" }, index.h("bds-icon", { key: '12392acaa84a4bf5a51ff0376a01f9bbfb5c3fac', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '84f31fb5726c15290ace69cae658f4f03940ff9b', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: 'c53e870c985bc9146c417e9af1813c718fd60b76' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
