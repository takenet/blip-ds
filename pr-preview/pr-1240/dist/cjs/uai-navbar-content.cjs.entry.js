'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'c9aa2197882259a0e9860ada86d98fa0db41174e', class: { NavbarContent: true } }, index.h("slot", { key: '64cc0d2db28d629d4c53030887a29cea5c5de81c' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
