import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '467724d1e1eb9c23f2ad6d9371e5d95470eb4890', role: "button" }, h("div", { key: '836f230fbb107f9fa8aba854b4146184353ef4b9', class: "menu-list-item" }, h("bds-icon", { key: 'f42b03ade012b78b58d6faa931c6936945c84c45', color: color, name: this.icon }), h("bds-typo", { key: '28087f377a45f89ff3f9547d70439283b092f81a', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b70c398f9324314b6f3c0c9a23b4a9110545ec35' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
