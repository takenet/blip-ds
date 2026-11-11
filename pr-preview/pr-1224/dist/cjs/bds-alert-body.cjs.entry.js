'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'fa4340099dfa6d8c94e123353cb2de6ab22aa8c5', class: "alert__body" }, index.h("bds-typo", { key: '71562cbd2bafd6ce7fa904772d3867cbecbf2204', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '41c2e124e4f43b0a922657110d4feab9e61fe2c8' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
