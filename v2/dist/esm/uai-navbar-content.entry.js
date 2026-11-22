import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '49690b9bde3cdf063519dae794498bb669380037', class: { NavbarContent: true } }, h("slot", { key: 'b82d8485d5d8c628c1fce26ed43156b582c2310c' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
