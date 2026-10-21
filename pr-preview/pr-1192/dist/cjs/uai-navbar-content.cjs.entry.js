'use strict';

var index = require('./index-DQyYkciT.js');

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '5691313c6ab5afce57ac0c480bc0abca3d9a1ab0', class: { NavbarContent: true } }, index.h("slot", { key: 'c25739390eddb698da251f11336c137415ecbe74' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss;

exports.uai_navbar_content = UaiNavbarContent;
//# sourceMappingURL=uai-navbar-content.entry.cjs.js.map

//# sourceMappingURL=uai-navbar-content.cjs.entry.js.map