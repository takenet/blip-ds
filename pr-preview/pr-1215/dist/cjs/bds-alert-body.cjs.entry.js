'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '8ded0a5613b845c836739a73875df5c7f207ea1f', class: "alert__body" }, index.h("bds-typo", { key: '93b8efcf289f4644755ae6040092126271a9f02e', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '3fa4899d81e5c67ec20de8a6d856065fe9308cc7' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
