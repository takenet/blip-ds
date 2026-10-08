import { r as registerInstance, h, H as Host, g as getElement } from './index-611fd21e.js';

const navbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:8px 16px}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:16px 8px}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-1{background-color:var(--color-surface-1, #f6f6f6)}.navbar__background-color__surface-2{background-color:var(--color-surface-2, #ededed)}.navbar__background-color__surface-3{background-color:var(--color-surface-3, #e3e3e3)}.navbar__background-color__surface-4{background-color:var(--color-surface-4, #141414)}";

const Navbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.orientation = 'vertical';
    this.backgroundColor = 'surface-1';
    this.justifyContent = 'space-between';
    this.dataTest = null;
  }
  render() {
    return (h(Host, { class: { [`${this.orientation}`]: true } }, h("div", { class: {
        navbar: true,
        [`navbar__justify-content__${this.justifyContent}`]: true,
        [`navbar__orientation__${this.orientation}`]: true,
        [`navbar__background-color__${this.backgroundColor}`]: true,
      }, "data-test": this.dataTest }, h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
Navbar.style = navbarCss;

export { Navbar as bds_navbar };
