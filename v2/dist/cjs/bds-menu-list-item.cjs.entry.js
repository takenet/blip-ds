'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'b52d026f5f4d77e9a0644d3122c4d166b08bee11', role: "button" }, index.h("div", { key: '3e11c2f1dcfd951a1d79c0a17ffec4e8a01db086', class: "menu-list-item" }, index.h("bds-icon", { key: '0bd6394932211164856e41882bf224b008557fea', color: color, name: this.icon }), index.h("bds-typo", { key: 'faaaeec58b70bd0683fa8c50b1fdd0f617b812f1', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: 'a86dd2d13e6c838c0c23f35cdfa3c627e58144e4' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
