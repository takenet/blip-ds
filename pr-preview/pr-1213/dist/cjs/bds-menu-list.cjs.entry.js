'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3772fb4ec0c587848172d832922b9d5e4596eba2' }, index.h("div", { key: '8d33e99dee4865567c61657c6e021291db0f3afe', class: "menu-list" }, index.h("div", { key: 'e002ac786e3540c85bdc95cef919800c6be00de5', class: "menu-list__left" }), index.h("slot", { key: '3e8f1b2b351923c653966ba99db0736a9ea6c428' }), index.h("div", { key: '604be0fde1b0254012dcc8043664611c699f5d26', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
