import { r as registerInstance, h, H as Host } from './index-611fd21e.js';

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#ffffff;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#8ca0b3}";

const MenuListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = undefined;
    this.icon = undefined;
  }
  render() {
    const color = this.color || 'currentColor';
    return (h(Host, { role: "button" }, h("div", { class: "menu-list-item" }, h("bds-icon", { color: color, name: this.icon }), h("bds-typo", { class: "menu-list-item__text", variant: "fs-10" }, h("slot", null)))));
  }
};
MenuListItem.style = menuListItemCss;

export { MenuListItem as bds_menu_list_item };
