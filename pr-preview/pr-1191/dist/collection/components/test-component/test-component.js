import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'fe77caf5c60a64924c6a77170b5193dcbc151c73', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'bc7ccf98776d94d46c830cfe52f4131948d512ae', xxs: "12", margin: "t-2" }, h("div", { key: '56273a7191105bc3110b8d320b4cd2647b9da068', class: "titulo" }, h("bds-typo", { key: '00a9ce68a17c7601495a2698be4f79a6c7d6b7b4', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '6f739dac9e5e3cbb1c007a83f1a76eede0e72fdc', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '42458879dd5c18b80819cea127be69a1bdcf7278', theme: "light" }, h("bds-paper", { key: '2ce7110f70584d2cff16a1de0e7862fbd7dc034d', elevation: "none", border: true }, h("bds-grid", { key: 'ca999055f78e3453c228cb8ad11c018e9b9697a1', padding: "2" })))), h("bds-grid", { key: '467936b2a95839a59a7af48fb18ae228e2aec57a', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '26ea4569357195811c16023a2098e7af962c04f8', theme: "dark" }, h("bds-paper", { key: '05e4927cdaa21045aac8a25e9fe8a9e575f23daf', elevation: "none", border: true }, h("bds-grid", { key: 'a381a311473f717715f76393121275a4b038d2a4', padding: "2" }))))));
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
