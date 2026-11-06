'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0c4323a98ffee5de42aa1cfa44d8e674a188a2bd', class: { NavbarContent: true } }, index.h("slot", { key: 'f5f4aaa6fb30bdfc89333d8a523da34fc05d28f7' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
