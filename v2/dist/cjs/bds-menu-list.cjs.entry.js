'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'afc25fc5e47eaaa9ba89552655039aacfbfa360c' }, index.h("div", { key: '2920439a1daadd48e8178f41f0355700d030dce9', class: "menu-list" }, index.h("div", { key: 'e943fb978a6d8aac1473173641c5cee7f5626bd9', class: "menu-list__left" }), index.h("slot", { key: '5eacb44f0bc7074021201f051d93c284c9c1e1ff' }), index.h("div", { key: '57013fa8b87ab3937e99895589572d9380fccce1', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
