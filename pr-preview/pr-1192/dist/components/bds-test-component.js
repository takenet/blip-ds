import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$5 } from './p-BpDAPE4n.js';
import { d as defineCustomElement$4 } from './p-D8dvmJln.js';
import { d as defineCustomElement$3 } from './p-HUbgptm9.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const testComponentCss = "";

const TestComponent = /*@__PURE__*/ proxyCustomElement(class TestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("bds-grid", { key: '5b2ed2843b9ea706dbb9379754757d22f58a8dcf', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'deecdfbab4577416fbf39ebab490545f4e1dc3dd', xxs: "12", margin: "t-2" }, h("div", { key: '71cbd6b7f58e7e86e799551a1bce3908621b3bab', class: "titulo" }, h("bds-typo", { key: 'de39c3488eeff69214367a1a99eb2b0162ed4f0b', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '16aa54670b6c0d1beff7ac28c69c0aa29e95bf8a', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '4ad164b769add197b4933bc29ad829e5af606a18', theme: "light" }, h("bds-paper", { key: '097293501b018819f5c9251fa40a6f68d6988e85', elevation: "none", border: true }, h("bds-grid", { key: 'a5b509bf782b1c369679658b8990aeca750524b5', padding: "2" })))), h("bds-grid", { key: 'ed4ff412c50c13d2e478bfa42698ac91c09bda75', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '93893dad039af10a4174a237369f0fd8229da118', theme: "dark" }, h("bds-paper", { key: '1d5981b4867503f90da265159280e2577298a55e', elevation: "none", border: true }, h("bds-grid", { key: 'a0da6d4e697ee938640b4f4d751c35af7cb0cd49', padding: "2" }))))));
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