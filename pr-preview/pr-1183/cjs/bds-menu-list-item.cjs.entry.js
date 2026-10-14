'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#ffffff;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#8ca0b3}";

const MenuListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = undefined;
    this.icon = undefined;
  }
  render() {
    const color = this.color || 'currentColor';
    return (index.h(index.Host, { role: "button" }, index.h("div", { class: "menu-list-item" }, index.h("bds-icon", { color: color, name: this.icon }), index.h("bds-typo", { class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", null)))));
  }
};
MenuListItem.style = menuListItemCss;

exports.bds_menu_list_item = MenuListItem;
