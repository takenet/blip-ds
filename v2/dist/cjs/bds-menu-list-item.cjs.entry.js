'use strict';

var index = require('./index-Bq8uwDLK.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: '89839b5e2bcd1c3114e056754373d7ddd6db7a1a', role: "button" }, index.h("div", { key: '71e20514d940a09a791f3907bf8e4233f61ed761', class: "menu-list-item" }, index.h("bds-icon", { key: '463aad068cd4e9b7e2edf95b6d2f656db302e657', color: color, name: this.icon }), index.h("bds-typo", { key: 'de97c9f1f3883ae7f9f3185193de941f9df57e7f', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '8106208abbb7d448e06c3589b7ec79555af8d398' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
