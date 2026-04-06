import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = /*@__PURE__*/ proxyCustomElement(class MenuList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'fd2efa6166ec5e70194e988a103467e01b316ba1' }, h("div", { key: 'a5e3fb2b77f539269541c72b5912432a2561b651', class: "menu-list" }, h("div", { key: 'b0b96f03859ada57245631b7057a07fa92900b26', class: "menu-list__left" }), h("slot", { key: '80fc703613476822c566b7a280a22fbba1ead92a' }), h("div", { key: '11c99646c228149919951baec400dd658ad9a2a1', class: "menu-list__right" }))));
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