'use strict';

var index = require('./index-GTJCA4wH.js');

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (index.h(index.Host, { key: '4742b2f65d18a025e27ca2bee56c56ccd07785b4', role: "button" }, index.h("div", { key: 'f0b1eb66245397fd266c75e448c4cfb2d733c9b1', class: "menu-list-item" }, index.h("bds-icon", { key: 'c97e2bc8c438646b8e1d4ab3fa2045cd4e75855f', color: color, name: this.icon }), index.h("bds-typo", { key: 'ef9db54119d7586c5c4263966c700a3214d515df', class: "menu-list-item__text", variant: "fs-10" }, index.h("slot", { key: '79d5b6e9905cbb4ac97e1d2eed17150c943225c9' })))));
    }
};
MenuListItem.style = menuListItemCss();

exports.bds_menu_list_item = MenuListItem;
