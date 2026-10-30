'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '074c8c8dc610ff7267e0d045084661b118c1ab30' }, index.h("div", { key: '46a5520fa92c85bf71ba3023866a533d1dad5f42', class: "menu-list" }, index.h("div", { key: 'd553ab2a32750c1302c7d58941f5dbecab1d16b7', class: "menu-list__left" }), index.h("slot", { key: 'c34f86af461dbcac9c5c42ad0ae424b44ad7368b' }), index.h("div", { key: 'f05b94c59ea20d1bb7eb065b5a0c4e19b01869d3', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
