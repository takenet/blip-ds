'use strict';

var index = require('./index-BuAR9UTp.js');

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'da436b8a8615fe4943a81b8b84a7060d6f5ca39c' }, index.h("div", { key: '9e4d7d648193ee89fb53294adc7554e14b9bb642', class: "menu-list" }, index.h("div", { key: '7eebe9ae0ed82d6438a765924225bfd74e452565', class: "menu-list__left" }), index.h("slot", { key: 'c087b0db5965d975551d59375bd58945b5657a28' }), index.h("div", { key: '00256063fa451443c2e0ab8add42b4ca6e3a7475', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

exports.bds_menu_list = MenuList;
