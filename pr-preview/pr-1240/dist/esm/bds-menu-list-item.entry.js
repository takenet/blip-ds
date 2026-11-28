import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '90591e7fdedeaae350b257c3a76e2d58f990edc3', role: "button" }, h("div", { key: '1c2131e0cb348ac43b04a5c3dbb6ebb16d1eaf01', class: "menu-list-item" }, h("bds-icon", { key: 'ce4469c8a77e3a19429297586f7dbc96a8be50f6', color: color, name: this.icon }), h("bds-typo", { key: 'c7945b0193d22cda04c1714ddfa6754afeee1686', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '3de01f893a1d5d4a234602e524ff6a06f563180a' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
