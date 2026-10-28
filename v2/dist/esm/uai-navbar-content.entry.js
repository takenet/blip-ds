import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cb8ad5b44065ecfbc93a4a4460f434d41f65dc1e', class: { NavbarContent: true } }, h("slot", { key: '478b01ce8607cfaf5e383709718b350a2aaf6c18' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
