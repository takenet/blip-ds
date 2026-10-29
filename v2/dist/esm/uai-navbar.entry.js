import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiNavbarCss = () => `:host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:var(--uai-spacing-lg, 1.5rem);-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:var(--uai-spacing-md, 1rem)}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:var(--uai-spacing-md, 1rem) var(--uai-spacing-md, 1rem)}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-background{background-color:var(--uai-surface-background, #f2f3f3)}.navbar__background-color__surface-contrast{background-color:var(--uai-surface-contrast, #e4e6e7)}.navbar__background-color__surface-inverse{background-color:var(--uai-surface-inverse, #242729)}.navbar__background-color__surface-muted{background-color:var(--uai-surface-muted, #f2f3f3)}.navbar__background-color__surface-paper{background-color:var(--uai-surface-paper, #ffffff)}`;

const UaiNavbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'ff0fee1b31a792a73df26d234c4530443394e776', class: { [`${this.orientation}`]: true } }, h("div", { key: '61b47408526b60e518ac85e80e5bdafd2b0555ab', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: 'f04abcc4e5d8aa63bb1018dd1c5996439ed9cb94' }))));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbar.style = uaiNavbarCss();

export { UaiNavbar as uai_navbar };
