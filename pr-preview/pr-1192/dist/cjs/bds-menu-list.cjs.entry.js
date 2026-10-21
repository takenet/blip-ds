'use strict';

var index = require('./index-DQyYkciT.js');

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '7c7e539ddee1e927f30c02e6828d756cd99b61e3' }, index.h("div", { key: '38ff1563782f602165a6f6bfb40e77bf3bc07acd', class: "menu-list" }, index.h("div", { key: 'd24a9ddf4b1a45ccef7299358dd6f7a1d20667dc', class: "menu-list__left" }), index.h("slot", { key: '47ee9bd375941ee36107e6ae7ff12769dcabf66c' }), index.h("div", { key: 'f1d49facd64df79b13208c308824b8d732e5480c', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss;

exports.bds_menu_list = MenuList;
//# sourceMappingURL=bds-menu-list.entry.cjs.js.map

//# sourceMappingURL=bds-menu-list.cjs.entry.js.map