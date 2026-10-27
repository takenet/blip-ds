import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$5 } from './p-B97SDoLM.js';
import { d as defineCustomElement$4 } from './p-2TfGvztS.js';
import { d as defineCustomElement$3 } from './p-HUbgptm9.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const testComponentCss = "";

const TestComponent = /*@__PURE__*/ proxyCustomElement(class TestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("bds-grid", { key: '2a79da356ddff9f0f5ad44f7ece35a6dcad25ad3', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'a59b56da16d9c7af4a4b94f76846d08e232d3d55', xxs: "12", margin: "t-2" }, h("div", { key: '2f87b41c1315c8e39b1f667d6052a71ce2858920', class: "titulo" }, h("bds-typo", { key: '78adc6a8a2a4a8662c20027c740f8ff6e3fbe48b', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '5053d6273cbbb31e455cd7ff2d76f5819c7ccfb6', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'b9c044aee29b768d03b6cc35d39ddb7c80088dff', theme: "light" }, h("bds-paper", { key: 'c220ec3c16ec380e62f3d09b23e2d1ea80afae9c', elevation: "none", border: true }, h("bds-grid", { key: '551e818efbff32908efe7f02d8481f4325ac1c56', padding: "2" })))), h("bds-grid", { key: '3d5d06cb4e89edc1e649a5e36e72c04a9de127c8', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'fe36214ca2c7ec35a3c117e0408e10d8393ff158', theme: "dark" }, h("bds-paper", { key: 'fe4e547650bf20bebf3aa73b1391626dd649809a', elevation: "none", border: true }, h("bds-grid", { key: '6a12c00c21b03270d22bd68ca9053a1b3a3ce5be', padding: "2" }))))));
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