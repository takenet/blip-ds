'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '81bab160760593c757d3cbe92c0a01a5707e484b', class: { NavbarContent: true } }, index.h("slot", { key: '8b81beccca1ff6735f8137ebd4f2905570f326a8' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
