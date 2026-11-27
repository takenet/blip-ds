'use strict';

var index = require('./index-JW9Yq-qX.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'cd758a88f7d7a9d755786969caab889c5c346ac7', class: "alert__body" }, index.h("bds-typo", { key: 'fed4c82874a9dc3e985efb642b10023779ac5fd4', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'af2fa2d5135c5314dcc12b0d037b9dadefa4f9fb' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
