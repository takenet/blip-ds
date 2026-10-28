import { r as registerInstance, h, H as Host } from './index-CkbvGS8Z.js';

const menuListItemCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}`;

const MenuListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'bdb0bc901f7a7007c95a086749e39051e62ea899', role: "button" }, h("div", { key: '7d0761f24b2d146d5654ed889b34504dceaee362', class: "menu-list-item" }, h("bds-icon", { key: 'ee8f93fe14fded553d8a14f2ff69108a05f62ac7', color: color, name: this.icon }), h("bds-typo", { key: 'e24931592aa40a162ec834d202e0d57a085a9b25', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '7ad39f92e4a1163714d23de190f224b4a8e1831b' })))));
    }
};
MenuListItem.style = menuListItemCss();

export { MenuListItem as bds_menu_list_item };
