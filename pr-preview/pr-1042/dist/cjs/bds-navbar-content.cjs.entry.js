'use strict';

var index = require('./index-ljSeaagN.js');

const navbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:8px 16px}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:16px 8px}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-1{background-color:var(--color-surface-1, rgb(246, 246, 246))}.navbar__background-color__surface-2{background-color:var(--color-surface-2, rgb(237, 237, 237))}.navbar__background-color__surface-3{background-color:var(--color-surface-3, rgb(227, 227, 227))}.navbar__background-color__surface-4{background-color:var(--color-surface-4, rgb(20, 20, 20))}";

const NavbarContent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '458985a119eaf4b480b003c853dde0af4f477a30', class: { NavbarContent: true } }, index.h("slot", { key: '79eed71f0436fd4c60fee3d9bdf279276c28c19b' })));
    }
    get hostElement() { return index.getElement(this); }
};
NavbarContent.style = navbarCss;

exports.bds_navbar_content = NavbarContent;
//# sourceMappingURL=bds-navbar-content.entry.cjs.js.map

//# sourceMappingURL=bds-navbar-content.cjs.entry.js.map