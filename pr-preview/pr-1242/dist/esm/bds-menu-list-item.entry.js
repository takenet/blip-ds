import { r as registerInstance, h, H as Host } from './index-B3G05Lxx.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '7c2980342f599e2f8efc893144229995c1426807', role: "button" }, h("div", { key: '979e77e9ff8a82f703294792c890519d13b38396', class: "menu-list-item" }, h("bds-icon", { key: '6b2a2ef46a5e2068644d0f635f159baa0933db69', color: color, name: this.icon }), h("bds-typo", { key: '86c93466bae760c08098ebfbf97eedcd7a22cbe0', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b87d2112f3001f3afa5fe6655762dd16b4b5a71d' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
