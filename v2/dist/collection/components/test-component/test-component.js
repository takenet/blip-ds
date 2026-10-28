import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '9ce3c10e027e04d86e421183d1084b08dd7381e2', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '5b8f1548ffa07036f22dfee31f8aaf47b4623980', xxs: "12", margin: "t-2" }, h("div", { key: 'e77061af60bb6f282481996de3e6cf2bd9f498ad', class: "titulo" }, h("bds-typo", { key: 'e0cbd6b25527f98bfef18aeb87ce0c785cef155b', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '764966d83c410e33310c349f63af7163558d6b02', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '286e939a3fb402f52597fd8b3782eca6725efe10', theme: "light" }, h("bds-paper", { key: 'b4d69a302f0334e9ed89150cbf0d8713c169b968', elevation: "none", border: true }, h("bds-grid", { key: '3470eea9108168764b55db57cc8c5287f979617c', padding: "2" })))), h("bds-grid", { key: '8611eda8f7e3240ce63b7b09d3cbe3d1f8fbc724', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'ff4814598e2086c6ea369bea8b0e8d3a7fb58da4', theme: "dark" }, h("bds-paper", { key: 'd1138183ebf5b543834288c4133b457fd3a1a8de', elevation: "none", border: true }, h("bds-grid", { key: '5286cb1a4d2c213109f3b1e226c689bba75d4616', padding: "2" }))))));
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
