'use strict';

var index = require('./index-GTJCA4wH.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '93f5112d1e28ebdfba7154cf57b2a87a3b82bf8d', class: "alert__body" }, index.h("bds-typo", { key: '214289744a9c0110590c99f2dd700aec8fcc987b', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '2af606b84c2863c3e3e31fbffee61554476ae867' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
