'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '582259c87bc1a06b6260e5e5c0c79705eecea08a', class: { NavbarContent: true } }, index.h("slot", { key: 'f1f2f0b78e49b3f9cde3d057bb4662b355ab45a1' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
