import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '01ad6fb0d5c3b79a9058e635fa5a204e0dc613f5', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'a98254a95f7a43bd2fad3f5922e3564215a53b71', xxs: "12", margin: "t-2" }, h("div", { key: '46dd35cfc52a405cf4dfb50617eb4e88495fa0f5', class: "titulo" }, h("bds-typo", { key: '1f974f193a4965ccaf45b1d337f3fa85bb65a43b', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'd55eed3c0af180788d3299b2d47d84761a8e6831', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '67f6b6bed090e6d8b1be6f06c9b2f0e817a76633', theme: "light" }, h("bds-paper", { key: '2ae94dfdf31730eda0e3d12f757d75bf981ec28d', elevation: "none", border: true }, h("bds-grid", { key: '56c7876aeb25ef8d8c4d06666df4843b78050e00', padding: "2" })))), h("bds-grid", { key: '8592332144b76873b1251c057cc5836764289409', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '8f6f4d3bf0c20e252a3f69df51362195fc0b8518', theme: "dark" }, h("bds-paper", { key: '0fb39b1b9187f6da3f3db288fa7744105a455f2e', elevation: "none", border: true }, h("bds-grid", { key: 'dac0d0cfea3a87c61d634f3fded179d20d2d2439', padding: "2" }))))));
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
