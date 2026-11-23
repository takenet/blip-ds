'use strict';

var index = require('./index-GTJCA4wH.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '6dde06b48a3bff106b122e07c7fd70d5b7f4f0de', class: "alert__body" }, index.h("bds-typo", { key: 'b92030bd9361ad25094d6203c39844d4acd7af2b', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'c7da28f4391e2b529ed1177d5e8ccdc2cc9355d3' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
