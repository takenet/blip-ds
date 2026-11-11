import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '713b78c7ad99953299930c8758dad7856f3506dc', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '03e521dbb5a5bf65689183ce3ee0f90046a723b0', xxs: "12", margin: "t-2" }, h("div", { key: 'ef5bf717e39234b441e655fc98126297df87b158', class: "titulo" }, h("bds-typo", { key: 'e3195392791a1272ec79e5eb5a1842a0d3895b5c', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'f942d0064241a9f2321e73f3d1e72948d1a55bd7', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '6db4592df679ce5079243e84597947cac415fe0a', theme: "light" }, h("bds-paper", { key: 'f5a7062112fc46046f61afcf32844a99a05ed3e1', elevation: "none", border: true }, h("bds-grid", { key: 'ae34f037ea3abb8916bb10272beafcf88c5e8862', padding: "2" })))), h("bds-grid", { key: 'f21962f4a3d84c6b55e031c07c517507c7bee39d', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '74efbddefdee0b30245df4651a20905bcc43acc7', theme: "dark" }, h("bds-paper", { key: '54ba4ef8f499b1be1769d0f75c5ade3a6325b085', elevation: "none", border: true }, h("bds-grid", { key: '214a27c472e01502f8193fd085cb2bcadd9a6fae', padding: "2" }))))));
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
