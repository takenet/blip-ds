'use strict';

var index = require('./index-DQyYkciT.js');

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}";

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'ac585839db83aef66c1b2064a588bff727c1a457', role: "button" }, index.h("div", { key: '2c39adac9b30a918e4f71d47671dd58a0f4a4173', class: "menu-list-item" }, index.h("bds-icon", { key: '39c95609a91cf9f1f5b4ae59bc6bdbb9fed7ac3c', color: color, name: this.icon }), index.h("bds-typo", { key: '273d4dbb180d737eada03851a9142cac9cc2b3b6', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '7dd77006f2f882eecb60bbf0e9b0e5fc7f68a9af' })))));
    }
};
MenuListItem.style = menuListItemCss;

exports.bds_menu_list_item = MenuListItem;
//# sourceMappingURL=bds-menu-list-item.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list-item.cjs.entry.js.map