import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c37c3469783beb681924b05d9ef376d0238e3419' }, h("div", { key: '8a40f88195005eddded4ccaa61d0dfbc38b393d1', class: "menu-list" }, h("div", { key: '989a0a5ababa268a5036110254e75624db45f1c0', class: "menu-list__left" }), h("slot", { key: 'd22493bac48538353ab2259ebd350d396010e56a' }), h("div", { key: '767bc7c480833e26b4c1f46e9f49015ac6bd95ab', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
