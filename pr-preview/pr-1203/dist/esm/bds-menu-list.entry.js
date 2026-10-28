import { r as registerInstance, h, H as Host } from './index-BnSR_zce.js';

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cbe31a41db2a6f0bcccaa4564839b63674e4e226' }, h("div", { key: '37b3694402155dc686b8863384c036993d04d917', class: "menu-list" }, h("div", { key: 'e735a7bd2ef0c5ee0195bccc2cba326d215cd918', class: "menu-list__left" }), h("slot", { key: '887f7aa16ca34d2d54b582c1ca9c3473a98451c9' }), h("div", { key: 'fcb118d5a25ef08090cfe09a15eda2e974c8b78e', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
