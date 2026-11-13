'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3067387d8e7ebced8df4af0c1a6862a060bbac1b' }, index.h("div", { key: '3cd362876aca385c6ab5dfad8bb56173d084d721', class: "menu-list" }, index.h("div", { key: '6aa27a10a5c34fd09b7f690f8c8acea0875174a9', class: "menu-list__left" }), index.h("slot", { key: '3549cd8720af844c69bf2980e2f76cff25184514' }), index.h("div", { key: 'd1138aec52240186d41599bdb5320f95de5837ff', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
