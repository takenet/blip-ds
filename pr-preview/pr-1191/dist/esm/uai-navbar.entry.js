import { r as registerInstance, h, H as Host, a as getElement } from './index-gowA9FoV.js';

const uaiNavbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:1rem}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:1rem 1rem}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-background{background-color:var(--uai-surface-background, #f2f3f3)}.navbar__background-color__surface-contrast{background-color:var(--uai-surface-contrast, #e4e6e7)}.navbar__background-color__surface-inverse{background-color:var(--uai-surface-inverse, #242729)}.navbar__background-color__surface-muted{background-color:var(--uai-surface-muted, #f2f3f3)}.navbar__background-color__surface-paper{background-color:var(--uai-surface-paper, #ffffff)}";

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
        return (h(Host, { key: '1bb6a10518bf264e1b2ab23fec1b2f5c81a682a5', class: { [`${this.orientation}`]: true } }, h("div", { key: '4d3a78feb56decc4a22811c27ac22525fb52bcb2', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: 'dd27c6f7c15739f554af29d6f740224d78b85765' }))));
    }
    get hostElement() { return getElement(this); }
};
UaiNavbar.style = uaiNavbarCss;

export { UaiNavbar as uai_navbar };
//# sourceMappingURL=uai-navbar.entry.js.map

//# sourceMappingURL=uai-navbar.entry.js.map