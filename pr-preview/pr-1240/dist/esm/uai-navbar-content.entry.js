import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'c9aa2197882259a0e9860ada86d98fa0db41174e', class: { NavbarContent: true } }, h("slot", { key: '64cc0d2db28d629d4c53030887a29cea5c5de81c' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
