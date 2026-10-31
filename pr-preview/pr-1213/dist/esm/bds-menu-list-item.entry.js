import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'b4216a00dc3610d76d7f099d3b75166716572671', role: "button" }, h("div", { key: '89c9fc706dfd5031f0ac6ee6dfc3b1277bda789b', class: "menu-list-item" }, h("bds-icon", { key: '99887edf112f54e4812683e1e8a31bb34328dcdd', color: color, name: this.icon }), h("bds-typo", { key: '4edea0e3447aa1b476fcb27e99b87d40138d458d', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'c6efcd9246a75f9f7cb4acc9327d91bb045a3ca4' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
