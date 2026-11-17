'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '87ebd2e00fe4ee242289ec54514a083a0101b3d5', class: "alert__body" }, index.h("bds-typo", { key: '65b5a98193384a4e442754060510a4ecd309bf29', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '5d58cad38654fbc312417fc47e4fbe4f64fb4146' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
