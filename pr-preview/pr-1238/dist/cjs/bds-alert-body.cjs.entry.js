'use strict';

var index = require('./index-GTJCA4wH.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '75f60b6173c5be8bbb1a78ff7fdeca1351a53a42', class: "alert__body" }, index.h("bds-typo", { key: '1ee585ce6abb9769299821d3f2da1787f891cdb9', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: 'abbefdbb47fd5558e5f627049d252e7baf0939c3' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
