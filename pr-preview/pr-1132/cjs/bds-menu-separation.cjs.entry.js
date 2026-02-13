'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const menuSeparationCss = ".menuseparation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px}.menuseparation__small{margin:8px 0}.menuseparation__default{margin:12px 0}.menuseparation__large{margin:16px 0}.menuseparation .dividor-item{height:1px;width:100%;background-color:#d2dfe6}.menuseparation .title-item{margin-right:8px;margin-top:-4px;color:#6e7b91}";

const BdsMenuSeparation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = null;
    this.size = null;
  }
  render() {
    return (index.h("div", { class: {
        menuseparation: true,
        [`menuseparation__${this.size}`]: true,
      } }, this.value && (index.h("bds-typo", { class: "title-item", variant: "fs-10", tag: "span" }, this.value)), index.h("div", { class: "dividor-item" })));
  }
};
BdsMenuSeparation.style = menuSeparationCss;

exports.bds_menu_separation = BdsMenuSeparation;
