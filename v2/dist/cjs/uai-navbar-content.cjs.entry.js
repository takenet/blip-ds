'use strict';

var index = require('./index-BqjYThoc.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'fed44eb1322d1d13795f4f81e3e151a56299dcf4', class: { NavbarContent: true } }, index.h("slot", { key: '83c5b1d741694ad118c9fc26dd2f37cae7eccd7f' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
