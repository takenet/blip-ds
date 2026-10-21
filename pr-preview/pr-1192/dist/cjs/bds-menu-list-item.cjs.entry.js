'use strict';

var index = require('./index-DQyYkciT.js');

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}";

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'eec46a1aff2ae6c21001791c13f7ba390ec40af6', role: "button" }, index.h("div", { key: '6cb311c762e3174684763331a2958de4b87b0c15', class: "menu-list-item" }, index.h("bds-icon", { key: '762ce125cdfab091863244b05d8474aafc212125', color: color, name: this.icon }), index.h("bds-typo", { key: 'e5baa4a2f6fe35f9669d583c606228c1d27da7ba', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '6ac38efe21f3d121873e5f4b6437c4e601b5cdfb' })))));
    }
};
MenuListItem.style = menuListItemCss;

exports.bds_menu_list_item = MenuListItem;
//# sourceMappingURL=bds-menu-list-item.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list-item.cjs.entry.js.map