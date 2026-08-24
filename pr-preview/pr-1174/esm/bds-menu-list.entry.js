import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d2dfe6}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#ffffff}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#ffffff}";

const MenuList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "menu-list" }, h("div", { class: "menu-list__left" }), h("slot", null), h("div", { class: "menu-list__right" }))));
  }
};
MenuList.style = menuListCss;

export { MenuList as bds_menu_list };
