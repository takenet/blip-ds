'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '036128ed2c5cedb48454c30ac76aab973b2f68bf', class: { NavbarContent: true } }, index.h("slot", { key: 'cbc8316108c5c8ccadc96421baa3d82c1095868a' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
