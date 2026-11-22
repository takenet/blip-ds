'use strict';

var index = require('./index-GTJCA4wH.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: '2474aef855fd26c9a003e14df5aadcbb69d06b5a', role: "button" }, index.h("div", { key: 'e61cb9e9136e3f0f73d4733691d1af859e32ebcd', class: "menu-list-item" }, index.h("bds-icon", { key: 'e9a10e9808986b3656ed4e742be1376d57eb4c5f', color: color, name: this.icon }), index.h("bds-typo", { key: '53f6769df9c4bee929c3cd02418d45be943692e3', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '18bb72dc0dd62ba09df1466d620fb87c689efd3b' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
