import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '20308ef78fadbcc46ed0fb9e6492dc1cc2e89cfa', role: "button" }, h("div", { key: '66e332440f1f98653d36b5fc4fa8f20cef2034e5', class: "menu-list-item" }, h("bds-icon", { key: 'f05613f6c6ff29f5b236bb04176df99def4e72da', color: color, name: this.icon }), h("bds-typo", { key: '3cd97f7d2bd1994793df4f6b27c0c8f68edb488b', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b40f25a9aa2c8d7b405790d4d4a36a55029f25fe' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
