import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '670586a884ae8174a3aca27cab90e56a43e84457', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '1f2d4abe18764aa8fc504c23b8184baf6163498d', xxs: "12", margin: "t-2" }, h("div", { key: '8e4deac280ca1b0e1038f862a56f4630ae3f838b', class: "titulo" }, h("bds-typo", { key: '11f0085e579e90d4290cad3b8756a530dacb75b7', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'b97fa03e6d6e357af1c989867c8cd442cd8e009a', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '261ad518de3433e99d00d30c8ef2f8a808b04d65', theme: "light" }, h("bds-paper", { key: '3d721c96ab12d7e02663e7509af1dd8214a7127d', elevation: "none", border: true }, h("bds-grid", { key: '7f4a6e7fe8895dd0d46348c9107d6de1b7de3d10', padding: "2" })))), h("bds-grid", { key: 'a155553ab5fb82ea3656eb3eb030f5915ff75b03', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'd6cad57b9c59c562a2e803ccbd1a8105744069c2', theme: "dark" }, h("bds-paper", { key: 'df28e56a9c5539cd61528cb728dd2fd01d59c2ad', elevation: "none", border: true }, h("bds-grid", { key: '37fcdf7d18d38d56960d06426fa58b3bf18b4547', padding: "2" }))))));
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
