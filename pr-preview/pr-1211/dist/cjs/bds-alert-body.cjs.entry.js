'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '307afe7132d915fc2d77f3a019d1cae19adfb841', class: "alert__body" }, index.h("bds-typo", { key: 'c63101671eb641c1e00745d38c5390be7d400c8b', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '3701467c91988b68df69c01099389c1e57025b48' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
