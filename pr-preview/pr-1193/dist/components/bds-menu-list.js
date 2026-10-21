import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = /*@__PURE__*/ proxyCustomElement(class MenuList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '8d14bfbfcbeef23325d5d1071d04c8ca5301487c' }, h("div", { key: '19c284ab66e23ba26633462b9070da4e3b42edfd', class: "menu-list" }, h("div", { key: '1e429f4a67769c3bfc1da9e52a74666eef396341', class: "menu-list__left" }), h("slot", { key: 'dc50428e121f1f248c3f6de71b06cba33bb83142' }), h("div", { key: '6a201e3556ab96f8d12b8febbcb0abefebce5591', class: "menu-list__right" }))));
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