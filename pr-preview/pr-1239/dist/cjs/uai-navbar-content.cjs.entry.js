'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiNavbarContentCss = () => `:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}`;

const UaiNavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'ad184c8c3a9c6b00ec6149ca8d4d6ef80d21d07e', class: { NavbarContent: true } }, index.h("slot", { key: '2f1b600980d348495b1635c69f03f7c5750e1780' })));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbarContent.style = uaiNavbarContentCss();

exports.uai_navbar_content = UaiNavbarContent;
