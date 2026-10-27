import { r as registerInstance, h, H as Host } from './index-gowA9FoV.js';

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}";

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '2a68cd17db01f60f5e7b75f7aef146386f4f68e6', role: "button" }, h("div", { key: '4d9e10de9ecd3f5d066f52ea79a956972e257577', class: "menu-list-item" }, h("bds-icon", { key: 'd324f4a957598be0b14feaceca4f35f0d42ec09f', color: color, name: this.icon }), h("bds-typo", { key: 'bdeb09c5f1ade0bc50bfb61aa468d0116f52715f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'f8cf62c9bf7da5970b2f6de2182713ea953096c6' })))));
    }
};
MenuListItem.style = menuListItemCss;

export { MenuListItem as bds_menu_list_item };
//# sourceMappingURL=bds-menu-list-item.entry.js.map

//# sourceMappingURL=bds-menu-list-item.entry.js.map