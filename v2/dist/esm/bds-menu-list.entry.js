import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list ${transformTag("bds-menu-list-item")}+${transformTag("bds-menu-list-item")}{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'ee6b3d278a472832293fdba35d7b0478af14bac5' }, h("div", { key: '0d895ac3c218a58ec31c20a7a5285ac8849bd796', class: "menu-list" }, h("div", { key: 'c8fddf23f9b8612a6068c503c143d1306c2233a7', class: "menu-list__left" }), h("slot", { key: 'e998d610f1ea8ca3deae0b0be3977569f7c5f82a' }), h("div", { key: '70c3b3799ed9ac20df15c0a42f28a3f8d172fb6a', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
