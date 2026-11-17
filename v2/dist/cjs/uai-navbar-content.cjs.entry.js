'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'e784e33c0c6ea742153042d7c46b5f7d7a7494c2', class: { NavbarContent: true } }, index.h("slot", { key: 'ba05a92a362043e2c62f0a406f362d0452dfb938' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
