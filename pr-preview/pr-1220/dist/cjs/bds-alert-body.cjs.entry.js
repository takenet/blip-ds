'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '3f733d790f244dd54efe00ddfa273d92eb09db25', class: "alert__body" }, index.h("bds-typo", { key: 'adfd98a84f2eb23e8e839339fcda95928564e570', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'b433731043ff739a7d9ade91b4ab6b442535c7bf' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
