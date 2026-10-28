import { r as registerInstance, h, H as Host, g as getElement } from './index-BnSR_zce.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4bcdff36dcb5f462e2c237465a478f450ee0729f', class: { NavbarContent: true } }, h("slot", { key: '99f43c4dac1054eb77ab5c36a296488967a90865' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
