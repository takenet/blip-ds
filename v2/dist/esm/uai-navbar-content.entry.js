import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '036128ed2c5cedb48454c30ac76aab973b2f68bf', class: { NavbarContent: true } }, h("slot", { key: 'cbc8316108c5c8ccadc96421baa3d82c1095868a' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
