import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent$1 = /*@__PURE__*/ proxyCustomElement(class UaiNavbarContent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'ef889b213c2f4fdb101b90a23408177205c64dab', class: { NavbarContent: true } }, h("slot", { key: '696a6c70d5a1111e8b65d1cb1e72277fc28d0811' })));
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