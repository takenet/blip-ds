'use strict';

var index = require('./index-BqjYThoc.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '9322172ddc4692521955cb8a4c74e0b8d3d869f3', class: "alert__body" }, index.h("bds-typo", { key: 'b20c6fbd30d392379d821aff271e65a004229170', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '4ae9b23f0ca473f1ac5a3bf4da86e87df69d3f71' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
