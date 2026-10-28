import { r as registerInstance, h, H as Host, g as getElement } from './index-BnSR_zce.js';

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'fed44eb1322d1d13795f4f81e3e151a56299dcf4', class: { NavbarContent: true } }, h("slot", { key: '83c5b1d741694ad118c9fc26dd2f37cae7eccd7f' })));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

export { UaiNavbarContent as uai_navbar_content };
