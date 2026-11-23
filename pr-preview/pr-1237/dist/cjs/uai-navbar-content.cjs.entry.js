'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '6f4481f177ba97ad09e05aea04a3674a03212f05', class: { NavbarContent: true } }, index.h("slot", { key: 'c9740d276b210cf40c610fdb60091041bb83da2e' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
