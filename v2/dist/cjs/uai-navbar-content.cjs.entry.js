'use strict';

var index = require('./index-GTJCA4wH.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '49690b9bde3cdf063519dae794498bb669380037', class: { NavbarContent: true } }, index.h("slot", { key: 'b82d8485d5d8c628c1fce26ed43156b582c2310c' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
