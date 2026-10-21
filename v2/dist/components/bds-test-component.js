import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$5 } from './p-D3lgj3w8.js';
import { d as defineCustomElement$4 } from './p-BvI3lVNC.js';
import { d as defineCustomElement$3 } from './p-HUbgptm9.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const testComponentCss = "";

const TestComponent = /*@__PURE__*/ proxyCustomElement(class TestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("bds-grid", { key: 'ff7421c5e2769ac31ccce3ff50c8bdfe7ea15c30', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '7f01442e0d5b98d955e69328360b3c1776e7eea6', xxs: "12", margin: "t-2" }, h("div", { key: 'd638bc79a9eaab2dabe8089c57d8657f63ee2206', class: "titulo" }, h("bds-typo", { key: 'f2c432edad92f94f9003bc61f2436d5ee6471fc9', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '546421825cfcbc09ee2c28813258355408edf4e3', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'feca72a7c8577db09e308e055cdb7612a37f249c', theme: "light" }, h("bds-paper", { key: 'e2e54131828149747d4033cbb017dac3ac545eca', elevation: "none", border: true }, h("bds-grid", { key: '02ff83f3061f2ea27080d8869ce012e122c6f8de', padding: "2" })))), h("bds-grid", { key: 'edad5b2ad99fe2e7b8db2a89338615e7733c4c1f', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '39de5ec69c2c0753d6e429daba678c47cefcb559', theme: "dark" }, h("bds-paper", { key: '68b7dacbc2dca8409062e284b819b75cebe272e6', elevation: "none", border: true }, h("bds-grid", { key: '8f5429281a1e16dfac98140cf43f89bf3f0c7f54', padding: "2" }))))));
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