'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const warningCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.warning__body{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;max-width:100%;max-height:100%;background-color:#f8fbfb;border-radius:8px;padding:16px}.warning__icon{color:#f6a721}.warning__message{color:#505f79;margin-left:8px}";

const Warning = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "warning__body" }, index.h("bds-icon", { class: "warning__icon", theme: "solid", size: "small", name: "warning" }), index.h("bds-typo", { variant: "fs-14", tag: "span", class: "warning__message" }, index.h("slot", null)))));
  }
};
Warning.style = warningCss;

exports.bds_warning = Warning;
