import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent$1 = /*@__PURE__*/ proxyCustomElement(class UaiNavbarContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '044038bdc03a26f1aa092dc44a0e938f8e0536db', class: { NavbarContent: true } }, h("slot", { key: '7a7377972ad9d5caa96d240579ce6928eb41854f' })));
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