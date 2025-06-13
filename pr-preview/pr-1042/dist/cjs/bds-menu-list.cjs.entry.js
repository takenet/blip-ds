'use strict';

var index = require('./index-ljSeaagN.js');

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '67cb6b04ef1ebb07993265b6aad03e1c371516c7' }, index.h("div", { key: '3d2c9080e608b5b7d3aca22ce540f0b411c13059', class: "menu-list" }, index.h("div", { key: 'af65ef1695a2231690a6b908048c5cadf28b0fbe', class: "menu-list__left" }), index.h("slot", { key: 'e7736e8569c79b3eab1fd9294e430bc48205f380' }), index.h("div", { key: 'd8cf89d965f887032f4970123d56f2995aacc5e8', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss;

exports.bds_menu_list = MenuList;
//# sourceMappingURL=bds-menu-list.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list.cjs.entry.js.map