import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'f2e95f18dad6ac372ab6a006fee0236be021a54a', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '05b0329a81167264fe765a5df9f4d23cc44b1232', xxs: "12", margin: "t-2" }, h("div", { key: '67ba1f156b039f2ebdf74d71f961724e5eda7dc4', class: "titulo" }, h("bds-typo", { key: '806e4b072fd7e2e787ccecf577b4ec53fd92951a', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '80b6f37ef7f487c3ec4f6164ca9cd9c1e24514db', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'ac402d10bfb63fd01d687a80218a96b5bd2bc84c', theme: "light" }, h("bds-paper", { key: '0273d0605b196b0c2deb94354e566c6910278405', elevation: "none", border: true }, h("bds-grid", { key: 'b17d12c76b8dd30274f7aa95c15bc6250b718d4e', padding: "2" })))), h("bds-grid", { key: '90e8201706f32ef7180f7f799940e3b50e7fc7c5', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '012bb0159533fd88e703633db552b844fc9e9182', theme: "dark" }, h("bds-paper", { key: '3fb168b529cafa6688db2ae1b606b44fdd1f0c67', elevation: "none", border: true }, h("bds-grid", { key: 'b6798d67eed67f6d0caaaa093fcce62b95d47320', padding: "2" }))))));
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
