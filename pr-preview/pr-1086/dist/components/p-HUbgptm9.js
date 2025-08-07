import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const themeProviderCss = ":host(.theme--light){width:100%;height:100%;--color-brand:rgb(0, 150, 250);--color-primary:rgb(30, 107, 241);--color-secondary:rgb(41, 41, 41);--color-surface-0:rgb(255, 255, 255);--color-surface-1:rgb(246, 246, 246);--color-surface-2:rgb(237, 237, 237);--color-surface-3:rgb(227, 227, 227);--color-surface-4:rgb(20, 20, 20);--color-surface-positive:rgb(1, 114, 62);--color-surface-negative:rgb(138, 0, 0);--color-surface-primary:rgb(30, 107, 241);--color-content-default:rgb(40, 40, 40);--color-content-disable:rgb(89, 89, 89);--color-content-ghost:rgb(140, 140, 140);--color-content-bright:rgb(255, 255, 255);--color-content-din:rgb(0, 0, 0);--color-border-1:rgba(0, 0, 0, 0.2);--color-border-2:rgba(0, 0, 0, 0.16);--color-border-3:rgba(0, 0, 0, 0.06);--color-positive:rgb(0, 122, 66);--color-negative:rgb(168, 11, 11);--color-info:rgb(128, 227, 235);--color-system:rgb(178, 223, 253);--color-focus:rgb(194, 38, 251);--color-success:rgb(132, 235, 188);--color-warning:rgb(253, 233, 155);--color-error:rgb(250, 190, 190);--color-delete:rgb(230, 15, 15);--color-extended-blue:rgb(25, 104, 240);--color-extended-blue-bright:rgb(178, 223, 253);--color-extended-ocean:rgb(0, 211, 228);--color-extended-ocean-bright:rgb(128, 227, 235);--color-extended-green:rgb(53, 222, 144);--color-extended-green-bright:rgb(132, 235, 188);--color-extended-yellow:rgb(251, 207, 35);--color-extended-yellow-bright:rgb(253, 233, 155);--color-extended-orange:rgb(240, 99, 5);--color-extended-orange-bright:rgb(252, 170, 115);--color-extended-red:rgb(230, 15, 15);--color-extended-red-bright:rgb(249, 159, 159);--color-extended-pink:rgb(251, 75, 193);--color-extended-pink-bright:rgb(253, 155, 220);--color-extended-gray:rgb(102, 102, 102);--color-extended-gray-bright:rgb(199, 199, 199);--color-hover:rgba(0, 0, 0, 0.08);--color-pressed:rgba(0, 0, 0, 0.16);--color-shadow-0:rgba(0, 0, 0, 0.04);--color-shadow-1:rgba(0, 0, 0, 0.16)}:host(.theme--dark){width:100%;height:100%;--color-brand:rgb(0, 150, 250);--color-primary:rgb(73, 139, 255);--color-secondary:rgb(255, 255, 255);--color-surface-0:rgb(66, 66, 66);--color-surface-1:rgb(57, 57, 57);--color-surface-2:rgb(31, 31, 31);--color-surface-3:rgb(20, 20, 20);--color-surface-4:rgb(10, 10, 10);--color-surface-positive:rgb(1, 86, 47);--color-surface-negative:rgb(87, 0, 0);--color-surface-primary:rgb(12, 80, 197);--color-content-default:rgb(255, 255, 255);--color-content-disable:rgb(148, 148, 148);--color-content-ghost:rgb(102, 102, 102);--color-content-bright:rgb(255, 255, 255);--color-content-din:rgb(0, 0, 0);--color-border-1:rgba(255, 255, 255, 0.2);--color-border-2:rgba(255, 255, 255, 0.16);--color-border-3:rgba(255, 255, 255, 0.06);--color-positive:rgb(107, 255, 188);--color-negative:rgb(255, 184, 184);--color-info:rgb(0, 79, 86);--color-system:rgb(0, 60, 100);--color-focus:rgb(194, 38, 251);--color-success:rgb(53, 94, 75);--color-warning:rgb(96, 89, 59);--color-error:rgb(123, 61, 61);--color-delete:rgb(182, 12, 12);--color-extended-blue:rgb(25, 104, 240);--color-extended-blue-bright:rgb(178, 223, 253);--color-extended-ocean:rgb(0, 211, 228);--color-extended-ocean-bright:rgb(128, 227, 235);--color-extended-green:rgb(53, 222, 144);--color-extended-green-bright:rgb(132, 235, 188);--color-extended-yellow:rgb(251, 207, 35);--color-extended-yellow-bright:rgb(253, 233, 155);--color-extended-orange:rgb(240, 99, 5);--color-extended-orange-bright:rgb(252, 170, 115);--color-extended-red:rgb(230, 15, 15);--color-extended-red-bright:rgb(249, 159, 159);--color-extended-pink:rgb(251, 75, 193);--color-extended-pink-bright:rgb(253, 155, 220);--color-extended-gray:rgb(102, 102, 102);--color-extended-gray-bright:rgb(199, 199, 199);--color-hover:rgba(255, 255, 255, 0.16);--color-pressed:rgba(255, 255, 255, 0.16);--color-shadow-0:var(--color-shadow-0, rgba(0, 0, 0, 0.04));--color-shadow-1:var(--color-shadow-1, rgba(0, 0, 0, 0.16))}:host(.theme--high-contrast){width:100%;height:100%;--color-brand:#0096fa;--color-primary:#1e6bf1;--color-secondary:#292929;--color-surface-1:#ffffff;--color-surface-2:#f5f5f5;--color-surface-3:#e0e0e0;--color-surface-4:#141414;--color-content-default:#292929;--color-content-disable:#666666;--color-content-ghost:#949494;--color-content-bright:#ffffff;--color-content-din:#000000;--color-border-1:#616161;--color-info:#80e3eb;--color-system:#99d5fd;--color-focus:#c226fb;--color-success:#84ebbc;--color-warning:#fde99b;--color-error:#f99f9f;--color-delete:#e60f0f;--color-extended-blue:#1968f0;--color-extended-ocean:#00d3e4;--color-extended-green:#35de90;--color-extended-yellow:#fbcf23;--color-extended-orange:#f06305;--color-extended-red:#e60f0f;--color-extended-pink:#fb4bc1;--color-extended-gray:#666666;--color-hover:rgba(0, 0, 0, 0.08);--color-pressed:rgba(0, 0, 0, 0.16);--color-shadow-1:rgba(0, 0, 0, 0.16);--color-positive:#10603b;--color-negative:#e60f0f}";

const ThemeProvider = /*@__PURE__*/ proxyCustomElement(class ThemeProvider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
    }
    render() {
        return (h(Host, { key: '5ce2325607a18e007d5bb4c8c0ebfae16b51a6ec', class: { theme: true, [`theme--${this.theme}`]: true } }, h("slot", { key: '2272735544deff8edc52803943b2ce9dd8611f2e' })));
    }
    static get style() { return themeProviderCss; }
}, [1, "bds-theme-provider", {
        "theme": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-theme-provider"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-theme-provider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ThemeProvider);
            }
            break;
    } });
}

export { ThemeProvider as T, defineCustomElement as d };
//# sourceMappingURL=p-HUbgptm9.js.map

//# sourceMappingURL=p-HUbgptm9.js.map