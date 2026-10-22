import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const menuListCss = ".menu-list{display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));height:56px;border-radius:8px}.menu-list bds-menu-list-item+bds-menu-list-item{border-left:1px solid #d4d4d4}.menu-list__left{width:7px;height:56px;border-radius:8px 0px 0px 8px;background-color:#f6f6f6}.menu-list__right{width:7px;height:56px;border-radius:0px 8px 8px 0px;background-color:#f6f6f6}";

const MenuList = /*@__PURE__*/ proxyCustomElement(class MenuList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'acabd22ae0445bac489939ad1a5dbbd26a508c29' }, h("div", { key: 'c9904e89f290b7470536851563d6775309892dce', class: "menu-list" }, h("div", { key: '5ad615415933402dc4c8a65adc948da147b83719', class: "menu-list__left" }), h("slot", { key: 'bd87939492c9f700fef4b4fa248e902f09573413' }), h("div", { key: '1742ddc25b04d9fec527f1f429913f41e1ff3260', class: "menu-list__right" }))));
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