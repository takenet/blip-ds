'use strict';

var index = require('./index-DQyYkciT.js');

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '8d14bfbfcbeef23325d5d1071d04c8ca5301487c' }, index.h("div", { key: '19c284ab66e23ba26633462b9070da4e3b42edfd', class: "menu-list" }, index.h("div", { key: '1e429f4a67769c3bfc1da9e52a74666eef396341', class: "menu-list__left" }), index.h("slot", { key: 'dc50428e121f1f248c3f6de71b06cba33bb83142' }), index.h("div", { key: '6a201e3556ab96f8d12b8febbcb0abefebce5591', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss;

exports.bds_menu_list = MenuList;
//# sourceMappingURL=bds-menu-list.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list.cjs.entry.js.map