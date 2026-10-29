'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1cfa8a88c076dd6c0cf1b4bb34a6a0034eefb24b' }, index.h("div", { key: 'ca9acbc3f7ce2995b06b9b3950abe12a2266d477', class: "warning__body" }, index.h("bds-icon", { key: '51b24da75fbba610ed34d52641edd4f8ec5b542e', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: '234c314b246c0692632e78993d2c04f2afc707f3', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '067acea9dee7201ca6b246eaf568f89111b2007b' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
