import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent$1 = /*@__PURE__*/ proxyCustomElement(class UaiNavbarContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0a33fd6b4e3b651cc80fdae336fa68e8d5ca5b14', class: { NavbarContent: true } }, h("slot", { key: 'cd56785bdf3be0ac973b03c5482a1e69b2b5ef99' })));
    }
    get hostElement() { return this; }
    static get style() { return uaiNavbarContentCss; }
}, [1, "uai-navbar-content"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["uai-navbar-content"];
    components.forEach(tagName => { switch (tagName) {
        case "uai-navbar-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, UaiNavbarContent$1);
            }
            break;
    } });
}

const UaiNavbarContent = UaiNavbarContent$1;
const defineCustomElement = defineCustomElement$1;

export { UaiNavbarContent, defineCustomElement };
//# sourceMappingURL=uai-navbar-content.js.map

//# sourceMappingURL=uai-navbar-content.js.map