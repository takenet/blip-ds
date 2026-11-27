'use strict';

var index = require('./index-JW9Yq-qX.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: 'c84858c14862d8951329359f9f1ffa7034e1083d', role: "button" }, index.h("div", { key: '24b674bb21f59b97e27b463f40494a8e59690fe6', class: "menu-list-item" }, index.h("bds-icon", { key: 'e2368a45226d1911fe1af8df1b4af259e0426f7e', color: color, name: this.icon }), index.h("bds-typo", { key: '46ac420c21f4e42efc00a3efb164b1445e8e0159', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '9f0963e67e258e8b994b231a551d7b948920b384' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
