'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e9c826f21617dee32af03b57018a38b64b4a0de2' }, index.h("div", { key: '94daeeb3307976767d06cd9e0af760f83b17fcd0', class: "menu-list" }, index.h("div", { key: '9cd937ae18ca102972ce7b4f4ed7d27bac6334ad', class: "menu-list__left" }), index.h("slot", { key: '310b190b4570d712f3e826c377249f30378392c4' }), index.h("div", { key: '672b999ba1ff3f91f0ccf28487e9d21702645468', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
