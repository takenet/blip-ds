import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '2a79da356ddff9f0f5ad44f7ece35a6dcad25ad3', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'a59b56da16d9c7af4a4b94f76846d08e232d3d55', xxs: "12", margin: "t-2" }, h("div", { key: '2f87b41c1315c8e39b1f667d6052a71ce2858920', class: "titulo" }, h("bds-typo", { key: '78adc6a8a2a4a8662c20027c740f8ff6e3fbe48b', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '5053d6273cbbb31e455cd7ff2d76f5819c7ccfb6', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'b9c044aee29b768d03b6cc35d39ddb7c80088dff', theme: "light" }, h("bds-paper", { key: 'c220ec3c16ec380e62f3d09b23e2d1ea80afae9c', elevation: "none", border: true }, h("bds-grid", { key: '551e818efbff32908efe7f02d8481f4325ac1c56', padding: "2" })))), h("bds-grid", { key: '3d5d06cb4e89edc1e649a5e36e72c04a9de127c8', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'fe36214ca2c7ec35a3c117e0408e10d8393ff158', theme: "dark" }, h("bds-paper", { key: 'fe4e547650bf20bebf3aa73b1391626dd649809a', elevation: "none", border: true }, h("bds-grid", { key: '6a12c00c21b03270d22bd68ca9053a1b3a3ce5be', padding: "2" }))))));
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
//# sourceMappingURL=test-component.js.map
