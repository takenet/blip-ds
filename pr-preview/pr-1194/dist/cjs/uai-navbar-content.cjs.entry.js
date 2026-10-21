'use strict';

var index = require('./index-DQyYkciT.js');

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '044038bdc03a26f1aa092dc44a0e938f8e0536db', class: { NavbarContent: true } }, index.h("slot", { key: '7a7377972ad9d5caa96d240579ce6928eb41854f' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss;

exports.uai_navbar_content = UaiNavbarContent;
//# sourceMappingURL=uai-navbar-content.entry.cjs.js.map

//# sourceMappingURL=uai-navbar-content.cjs.entry.js.map