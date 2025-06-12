'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d2dfe6}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#ffffff}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#ffffff}";

const MenuList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "menu-list" }, index.h("div", { class: "menu-list__left" }), index.h("slot", null), index.h("div", { class: "menu-list__right" }))));
  }
};
MenuList.style = menuListCss;

exports.bds_menu_list = MenuList;
