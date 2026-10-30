'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'aba27156a437b5b1517cdc3b813d9db884fa746b', class: "alert__body" }, index.h("bds-typo", { key: '946450b7faad5f1310014a022ae696dff91388cf', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '42e56c6c5a43cdd5f034879f92e76a9865fac588' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
