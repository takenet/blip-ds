import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '117d5416d1c2cb25f45de280334640762de6a548', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '638d3218384b87e2e69ec79b8e20975048660cc7', xxs: "12", margin: "t-2" }, h("div", { key: 'e345fdd5c6a31c6ec398a61b02289dbb0e6fccdc', class: "titulo" }, h("bds-typo", { key: '7cc74086fb3e27821e3f714169b6fd23ed0ed33d', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'a034aedac35664eb28198724a3582f2a0c8f1d2a', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'c1c7e7b3fc67f9ad1afb9b8b1e7245dd25f824d8', theme: "light" }, h("bds-paper", { key: 'd66d986f0dfa8125d7d951a4fb161174dd6a2192', elevation: "none", border: true }, h("bds-grid", { key: '486606bf0bda1a714a305e3da3c111a4264e40b3', padding: "2" })))), h("bds-grid", { key: 'efec61b8fa6eeaa1eedffe6d36567b54cfc3a470', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '555ac5fe374a920f6589e793f5dbf07feaff604d', theme: "dark" }, h("bds-paper", { key: 'cbdfa63fc0fde1e911a6f4d953bfc12dc3951097', elevation: "none", border: true }, h("bds-grid", { key: '8248decf4ec29edd3b73ca3007a44b43b5d5ac9f', padding: "2" }))))));
    }
    static get is() { return "bds-test-component"; }
    static get originalStyleUrls() {
        return {
            "$": ["test-component.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["test-component.css"]
        };
    }
}
