'use strict';

var index = require('./index-D_zq0Z7d.js');

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}";

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'a0be5716c5f642ca3f01cf092273a3c387364251', role: "button" }, index.h("div", { key: 'e056ddf9e4c9ef5bbc6761894edad231bf55f5a8', class: "menu-list-item" }, index.h("bds-icon", { key: 'd6e5e464ef24f42fd2637aa29a050ddfd72076b0', color: color, name: this.icon }), index.h("bds-typo", { key: 'ec6f4d1ad1d53420beee57a606404b7acad148ca', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '428f59f610069ce92241c4a8d0427ba59827c224' })))));
    }
};
MenuListItem.style = menuListItemCss;

exports.bds_menu_list_item = MenuListItem;
//# sourceMappingURL=bds-menu-list-item.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list-item.cjs.entry.js.map