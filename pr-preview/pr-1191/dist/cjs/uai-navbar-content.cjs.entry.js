'use strict';

var index = require('./index-DQyYkciT.js');

const uaiNavbarContentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:0.5rem}";

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ef889b213c2f4fdb101b90a23408177205c64dab', class: { NavbarContent: true } }, index.h("slot", { key: '696a6c70d5a1111e8b65d1cb1e72277fc28d0811' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss;

exports.uai_navbar_content = UaiNavbarContent;
//# sourceMappingURL=uai-navbar-content.entry.cjs.js.map

//# sourceMappingURL=uai-navbar-content.cjs.entry.js.map