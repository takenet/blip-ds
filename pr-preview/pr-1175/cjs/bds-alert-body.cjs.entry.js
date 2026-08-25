'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const alertBodyCss = ".alert__body{position:relative;width:100%;padding:12px 16px;margin-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box}";

const AlertBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "alert__body" }, index.h("bds-typo", { variant: "fs-14", bold: "regular", slot: "body" }, index.h("slot", null))));
  }
};
AlertBody.style = alertBodyCss;

exports.bds_alert_body = AlertBody;
