'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'e86bb93f8ed6f57638eafb346aa9734eb27e678e', role: "button" }, index.h("div", { key: '95afd5c7ae0dad9592b315ca34d8d53ef825a682', class: "menu-list-item" }, index.h("bds-icon", { key: '576557f9bf8dba021555f570921ef4fd9dd35160', color: color, name: this.icon }), index.h("bds-typo", { key: 'c01edd5b802ee87c624a3a3832991ef0b1fcd693', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: 'a1666bb85b26876b4b64889ec6fb7caf1f919358' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
