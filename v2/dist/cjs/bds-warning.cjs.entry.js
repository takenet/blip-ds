'use strict';

var index = require('./index-BuAR9UTp.js');

const warningCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#ededed;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}`;

const Warning = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'a4ea8935003d44b527ff26de33e0d0cac9e929a0' }, index.h("div", { key: 'a195df117eaf1930b50ae6dc2e1976a034e3d575', class: "warning__body" }, index.h("bds-icon", { key: '465d42026e583cbd4cec951493bad2bc99c4f60a', class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { key: 'be9bc277c4f1777157bcbc908be7c10f5126eadd', variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", { key: '909edecd18c677bee71b8531b82678ff6045643e' })))));
    }
};
Warning.style = warningCss();

exports.bds_warning = Warning;
