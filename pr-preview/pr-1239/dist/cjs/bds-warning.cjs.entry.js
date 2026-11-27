'use strict';

var index = require('./index-JW9Yq-qX.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '9421350be04c3792a4cb25505147f81007080e9d' }, index.h("div", { key: '9f3dd5c905d447c6bef21f2747d64876336f62c3', class: "warning__body" }, index.h("bds-icon", { key: '4eac92ad7942824e517dfc8ca97e18a669d34243', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '951220f844f884e762a46bb63cf37e28331029db', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '60cb1bdf6049579e6e22476005adf9d8f6ab10df' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
