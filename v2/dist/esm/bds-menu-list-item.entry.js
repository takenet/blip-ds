import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '8e74d107833cc209ee83fc469864185ae7123e5d', role: "button" }, h("div", { key: 'cc401ddad8381e4a43418f15ac1954104409af22', class: "menu-list-item" }, h("bds-icon", { key: '4e233e74b2ff20605a02a21ad3337c263090fd5e', color: color, name: this.icon }), h("bds-typo", { key: 'aa350349be57498c95e32ce34c03411ff50fb899', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '279ea21f777cc4bd4109b1e308edebec722aa690' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
