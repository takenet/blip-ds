'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'dc0d07287b8e43880e58e76be69e3ef79a598297', role: "button" }, index.h("div", { key: 'a1742fd9c066822a9b0ae8ce135444e77dc2f9b8', class: "menu-list-item" }, index.h("bds-icon", { key: 'a60dbfd6b2b89a4469d06e2b9da004f2b64f2cac', color: color, name: this.icon }), index.h("bds-typo", { key: '254d512691337454b781437cc3b4efdc7901a6ce', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: 'c65ab0f637edad37386018d95e9b55c4d77f3868' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
