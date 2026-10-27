import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$5 } from './p-D-hI-6BA.js';
import { d as defineCustomElement$4 } from './p-CvPJc8DB.js';
import { d as defineCustomElement$3 } from './p-HUbgptm9.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const testComponentCss = "";

const TestComponent = /*@__PURE__*/ proxyCustomElement(class TestComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("bds-grid", { key: '1bb18b5da3a55b098b2f161faeaae3d8249dfc0d', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'e2014a3c6585353f0bf550b7667f049ca754663d', xxs: "12", margin: "t-2" }, h("div", { key: '91ca909cd92e2a8a8b734400da9d5600e83d24c2', class: "titulo" }, h("bds-typo", { key: '45ef20619609208af79a677adfecaad940547d45', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '885c7229f48f83c4be6741a99c58eb7522e60e49', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '76425bdac99e0b0c494bd2ed4f6fb97f95a7b065', theme: "light" }, h("bds-paper", { key: '6138d82520328b8d29ed0a22b5697db41fd5de49', elevation: "none", border: true }, h("bds-grid", { key: '9e4e03d4b6f1db3c1d8da93b8b9a4c52a62aa363', padding: "2" })))), h("bds-grid", { key: '45d5d576de878df25f6ac1520698d78e156a2c0f', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '8875feebaf5d7e8c5dfae04e432eed2aee2dcb02', theme: "dark" }, h("bds-paper", { key: '88f1eef9786f37c92adca8dbaf6c144f7f8c5ab0', elevation: "none", border: true }, h("bds-grid", { key: '13deb68311d4853a075d821101043ee19c393783', padding: "2" }))))));
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