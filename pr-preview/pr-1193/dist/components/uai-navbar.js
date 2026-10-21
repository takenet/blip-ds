import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uaiNavbarCss = ":host{display:-ms-flexbox;display:flex}:host(.horizontal){width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.vertical){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:100%}.navbar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;gap:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box}.navbar ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navbar__justify-content__flex-start{-ms-flex-pack:start;justify-content:flex-start}.navbar__justify-content__center{-ms-flex-pack:center;justify-content:center}.navbar__justify-content__flex-end{-ms-flex-pack:end;justify-content:flex-end}.navbar__justify-content__space-between{-ms-flex-pack:justify;justify-content:space-between}.navbar__justify-content__space-around{-ms-flex-pack:distribute;justify-content:space-around}.navbar__justify-content__space-evenly{-ms-flex-pack:space-evenly;justify-content:space-evenly}.navbar__orientation__horizontal{-ms-flex-direction:row;flex-direction:row;width:100%;padding:1rem}.navbar__orientation__horizontal ::slotted(*){-ms-flex-direction:row;flex-direction:row}.navbar__orientation__vertical{-ms-flex-direction:column;flex-direction:column;height:100%;padding:1rem 1rem}.navbar__orientation__vertical ::slotted(*){-ms-flex-direction:column;flex-direction:column}.navbar__background-color__surface-background{background-color:var(--uai-surface-background, #f2f3f3)}.navbar__background-color__surface-contrast{background-color:var(--uai-surface-contrast, #e4e6e7)}.navbar__background-color__surface-inverse{background-color:var(--uai-surface-inverse, #242729)}.navbar__background-color__surface-muted{background-color:var(--uai-surface-muted, #f2f3f3)}.navbar__background-color__surface-paper{background-color:var(--uai-surface-paper, #ffffff)}";

const UaiNavbar$1 = /*@__PURE__*/ proxyCustomElement(class UaiNavbar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: '6004048115cc251ddc6bdd58fb80d07f132eabee', class: { [`${this.orientation}`]: true } }, h("div", { key: '8a64702263ca879bf9c92cfec2d285b901da56da', class: {
                navbar: true,
                [`navbar__justify-content__${this.justifyContent}`]: true,
                [`navbar__orientation__${this.orientation}`]: true,
                [`navbar__background-color__${this.backgroundColor}`]: true,
            }, "data-test": this.dataTest }, h("slot", { key: '76b23282432952b3e4f3b28aa989c4aef51def51' }))));
    }
    get hostElement() { return this; }
    static get style() { return uaiNavbarCss; }
}, [1, "uai-navbar", {
        "orientation": [1],
        "backgroundColor": [1, "background-color"],
        "justifyContent": [1, "justify-content"],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["uai-navbar"];
    components.forEach(tagName => { switch (tagName) {
        case "uai-navbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, UaiNavbar$1);
            }
            break;
    } });
}

const UaiNavbar = UaiNavbar$1;
const defineCustomElement = defineCustomElement$1;

export { UaiNavbar, defineCustomElement };
//# sourceMappingURL=uai-navbar.js.map

//# sourceMappingURL=uai-navbar.js.map