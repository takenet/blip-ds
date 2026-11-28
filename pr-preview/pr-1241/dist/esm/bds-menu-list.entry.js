import { t as transformTag, r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const menuListCss = () => `.menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list ${transformTag("bds-menu-list-item")}+${transformTag("bds-menu-list-item")}{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}`;

const MenuList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd67d95e4073d1080d4b7c110951c90bd93d4472a' }, h("div", { key: 'e127fcf50f67de5b616b323882d047e825c18b71', class: "menu-list" }, h("div", { key: '01911c5cee64a00a48d4a7bb7eba8a4b37b04d98', class: "menu-list__left" }), h("slot", { key: '633fffdfdf6aa1c9951213fedba10e54b0f6f1de' }), h("div", { key: '33f8e7f0fdf4aae0c33d3d4112e80b2e0ff6766e', class: "menu-list__right" }))));
    }
};
MenuList.style = menuListCss();

export { MenuList as bds_menu_list };
