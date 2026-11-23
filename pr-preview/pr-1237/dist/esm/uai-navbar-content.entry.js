import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '6f4481f177ba97ad09e05aea04a3674a03212f05', class: { NavbarContent: true } }, h("slot", { key: 'c9740d276b210cf40c610fdb60091041bb83da2e' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
