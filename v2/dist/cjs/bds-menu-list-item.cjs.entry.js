'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: '9cdb496516bf6093eee981f65de2b95a5249a8b9', role: "button" }, index.h("div", { key: 'f7873e47f35cbd38e5ce2d2b9068c5565baf9fed', class: "menu-list-item" }, index.h("bds-icon", { key: 'fb16db6d045d5a9588b69a28515465446678a04d', color: color, name: this.icon }), index.h("bds-typo", { key: '07933a0d9a87f44761cc6e87120c91da34706559', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '1aa07f62d1b15245d2265060e02bd1b03351faab' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
