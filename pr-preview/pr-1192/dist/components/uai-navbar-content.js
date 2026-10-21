import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent$1 = /*@__PURE__*/ proxyCustomElement(class UaiNavbarContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '5691313c6ab5afce57ac0c480bc0abca3d9a1ab0', class: { NavbarContent: true } }, h("slot", { key: 'c25739390eddb698da251f11336c137415ecbe74' })));
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