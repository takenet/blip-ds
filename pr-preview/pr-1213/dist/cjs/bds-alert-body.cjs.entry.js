'use strict';

var index = require('./index-BuAR9UTp.js');

const alertBodyCss = () => `.alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}`;

const AlertBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'b718f074aed9923786e539614b350620ae7641a1', class: "alert__body" }, index.h("bds-typo", { key: 'd712bacd127944ab172e077ea1d701c9240d91dc', variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", { key: '27d4c59430d99277b92c18bfcffad465b1dc547e' }))));
    }
};
AlertBody.style = alertBodyCss();

exports.bds_alert_body = AlertBody;
