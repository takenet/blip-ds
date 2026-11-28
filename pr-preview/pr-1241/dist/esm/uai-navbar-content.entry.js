import { r as registerInstance, h, H as Host, g as getElement } from './index-B3G05Lxx.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0d000f475e718a26bed1a14cdeb0feee675f16e2', class: { NavbarContent: true } }, h("slot", { key: '2a80a1a1e5c725282bd6093ef3088804ed026b2b' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
