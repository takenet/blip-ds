import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '586d0b13d77d4dd84666b638f006b077180037dc', class: { NavbarContent: true } }, h("slot", { key: 'c1d389b705f206e7c53e86f7a1388cec066381c6' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
