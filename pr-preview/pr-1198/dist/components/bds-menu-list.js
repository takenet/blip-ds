import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = /*@__PURE__*/ proxyCustomElement(class MenuList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'e0417530a119c97cbd79258405224be0f168db75' }, h("div", { key: 'ff454871d68928aedaaad1338031e4261448e95d', class: "menu-list" }, h("div", { key: 'aa92d2a30b1ae77efa4489110a5c937d0555339d', class: "menu-list__left" }), h("slot", { key: '78f25c25715c5e2f4b611b0da7cbd32e0b57e6dd' }), h("div", { key: 'c00338ba83145a2d5e5b178a5d9c96b266c2e398', class: "menu-list__right" }))));
    }
    static get style() { return menuListCss; }
}, [1, "bds-menu-list"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-menu-list"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-menu-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuList);
            }
            break;
    } });
}

const BdsMenuList = MenuList;
const defineCustomElement = defineCustomElement$1;

export { BdsMenuList, defineCustomElement };
//# sourceMappingURL=bds-menu-list.js.map

//# sourceMappingURL=bds-menu-list.js.map