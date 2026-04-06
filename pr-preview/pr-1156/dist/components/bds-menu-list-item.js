import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$3 } from './p-CxIPAixx.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const menuListItemCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.menu-list-item{background-color:#f6f6f6;color:currentColor;cursor:pointer;width:76px;height:56px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.menu-list-item:hover,.menu-list-item:hover>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item:active,.menu-list-item:active>.menu-list-item__text{background-color:#d1e3fa;color:#3f7de8}.menu-list-item:focus,.menu-list-item:focus>.menu-list-item__text{background-color:#f3f6fa;color:#3f7de8}.menu-list-item__text{color:#e3e3e3}";

const MenuListItem = /*@__PURE__*/ proxyCustomElement(class MenuListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'c489ce1407d5e103d342f9183ce0bd5b37748dea', role: "button" }, h("div", { key: 'aed3c0283ffbd53683bc4deccc4a4a3d85dccf06', class: "menu-list-item" }, h("bds-icon", { key: 'd129de43630f4b6705d1517b8f4db32d6f72a290', color: color, name: this.icon }), h("bds-typo", { key: 'c6d61c329c69ae67ec59ada75135d55f5110468f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '0680cb8ee9ee5189cc09e298c36bcceecab005ba' })))));
    }
    static get style() { return menuListItemCss; }
}, [1, "bds-menu-list-item", {
        "color": [1],
        "icon": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu-list-item", "bds-icon", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuListItem);
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsMenuListItem = MenuListItem;
const defineCustomElement = defineCustomElement$1;

export { BdsMenuListItem, defineCustomElement };
//# sourceMappingURL=bds-menu-list-item.js.map

//# sourceMappingURL=bds-menu-list-item.js.map