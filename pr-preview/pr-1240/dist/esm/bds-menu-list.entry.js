import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list ${transformTag("bds-menu-list-item")}+${transformTag("bds-menu-list-item")}{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '61e5de06a12a0e9803a1880f2a6a91e51dead6ee' }, h("div", { key: '124b5b10650dc2d255057440864e0541d29216d0', class: "menu-list" }, h("div", { key: 'cf08bca01f5a009144c01ac6582be203101c5b66', class: "menu-list__left" }), h("slot", { key: 'baeb12dad6c2abfe15d2309cd24c43bbc0d5f567' }), h("div", { key: '036cbd95969b978652d314499caf5340c4f9ab68', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
