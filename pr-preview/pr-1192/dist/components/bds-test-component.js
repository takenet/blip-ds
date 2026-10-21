import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$5 } from './p-XsZYgdgq.js';
import { d as defineCustomElement$4 } from './p-m8KiTeOk.js';
import { d as defineCustomElement$3 } from './p-HUbgptm9.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const testComponentCss = "";

const TestComponent = /*@__PURE__*/ proxyCustomElement(class TestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("bds-grid", { key: 'd39cc2a75000c46509a02a78688ded320f33b9e2', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '50875595976328a1b631e09a412b2d7f75206ae9', xxs: "12", margin: "t-2" }, h("div", { key: 'ad7419d61b38a138ca51017c7df7ad4d40c8e630', class: "titulo" }, h("bds-typo", { key: 'cc3408a7a3acd49d35aa923c7cefb1ab463e496d', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '48117d0ecf47312441c4d7af330ac1d254bf377b', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'ca73c70713341eff247b73f02bb6cb9bd2d9127c', theme: "light" }, h("bds-paper", { key: 'afb13c2238d8d15206f6c497af8b332889be16bd', elevation: "none", border: true }, h("bds-grid", { key: 'ef22e11caef7a56ad3eb5a0e5e22c1ded2cd32fd', padding: "2" })))), h("bds-grid", { key: '90a5fd41cd364c47aab4f4ff871ea1b98b149b32', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '96e18502b7b9648cc6721ab6a92d6fdf39e98510', theme: "dark" }, h("bds-paper", { key: 'c919c7dd34bb398db15dd24a3f1cba11796d1986', elevation: "none", border: true }, h("bds-grid", { key: 'e09d7cd9870dcf3c0f61e7834355135072861b13', padding: "2" }))))));
    }
    static get style() { return testComponentCss; }
}, [0, "bds-test-component"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-test-component", "bds-grid", "bds-paper", "bds-theme-provider", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-test-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TestComponent);
            }
            break;
        case "bds-grid":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "bds-paper":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-theme-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsTestComponent = TestComponent;
const defineCustomElement = defineCustomElement$1;

export { BdsTestComponent, defineCustomElement };
//# sourceMappingURL=bds-test-component.js.map

//# sourceMappingURL=bds-test-component.js.map