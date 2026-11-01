'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'a68b51cf71a43335303410300b9f56256e2730d2', class: "alert__body" }, index.h("bds-typo", { key: '2170aab25c819425666940096bf150f75db5abaa', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '03b09904eb434bd8181e4746b1b0c0f5257ff830' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
