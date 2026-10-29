'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c3fe385d9cd873f647f604d9d6d0ffd1a94544ce' }, index.h("div", { key: 'ebc1e56190bbf836d838c47e9e50d0fb6e745c4d', class: "menu-list" }, index.h("div", { key: '8875fd5d2bedb6c697413aaaacfb8a3fe8e13c92', class: "menu-list__left" }), index.h("slot", { key: 'ca65f0ec589b6ffd4284cab1208f7d57aa4c75c7' }), index.h("div", { key: 'b35affbe0ed22e5345bc2a0f09a19a183f0a81d7', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
