'use strict';

var index = require('./index-DQyYkciT.js');

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0a33fd6b4e3b651cc80fdae336fa68e8d5ca5b14', class: { NavbarContent: true } }, index.h("slot", { key: 'cd56785bdf3be0ac973b03c5482a1e69b2b5ef99' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss;

exports.uai_navbar_content = UaiNavbarContent;
//# sourceMappingURL=uai-navbar-content.entry.cjs.js.map

//# sourceMappingURL=uai-navbar-content.cjs.entry.js.map