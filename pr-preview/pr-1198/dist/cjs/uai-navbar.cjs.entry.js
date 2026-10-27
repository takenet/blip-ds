'use strict';

var index = require('./index-DQyYkciT.js');

const uaiNavbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:1rem}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:1rem 1rem}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-background{background-color:var(--uai-surface-background, #f2f3f3)}.navbar__background-color__surface-contrast{background-color:var(--uai-surface-contrast, #e4e6e7)}.navbar__background-color__surface-inverse{background-color:var(--uai-surface-inverse, #242729)}.navbar__background-color__surface-muted{background-color:var(--uai-surface-muted, #f2f3f3)}.navbar__background-color__surface-paper{background-color:var(--uai-surface-paper, #ffffff)}";

const UaiNavbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Navbar orientation: horizontal or vertical. */
        this.orientation = 'vertical';
        /** Background surface color. */
        this.backgroundColor = 'surface-paper';
        /** Alignment for navbar content. */
        this.justifyContent = 'space-between';
        /** Attribute used to identify the component in tests. */
        this.dataTest = null;
    }
    render() {
        return (index.h(index.Host, { key: 'a02fad0a9951fc3f5f9b12ec03e254eea7bf4b6d', class: { [`${this.orientation}`]: true } }, index.h("div", { key: '91bfb19f2139dd8b2453c9f2181fefd742bd1d74', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, index.h("slot", { key: '36a60717b3d0281497b2b2a7571762cfa8bb27f2' }))));
    }
    get hostElement() { return index.getElement(this); }
};
UaiNavbar.style = uaiNavbarCss;

exports.uai_navbar = UaiNavbar;
//# sourceMappingURL=uai-navbar.entry.cjs.js.map

//# sourceMappingURL=uai-navbar.cjs.entry.js.map