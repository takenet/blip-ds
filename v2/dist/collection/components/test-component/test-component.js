import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '7f3368fb65fffbbe67a8336c4e6a0b824129884f', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'd67643359a25d9d274f52b464c1ce44309981e91', xxs: "12", margin: "t-2" }, h("div", { key: '728581e5240e6f5a7255bcde59d091517be68984', class: "titulo" }, h("bds-typo", { key: '5697e8fb2c305dd836d8ae84bf521c5c7b9278e9', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '72923bccd0ddbb1fb67499752d825304604d1003', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '88c1d356120dd114d20f0006a8b6d507b2f7150b', theme: "light" }, h("bds-paper", { key: 'd9f1616bf4435554eb1a1d5ff7c655ad89c89453', elevation: "none", border: true }, h("bds-grid", { key: '8eb3821ec362c87c3e334f2fd72b1281398ea3c9', padding: "2" })))), h("bds-grid", { key: '331e01d0803b7b4286a95b17abfa0f6a3ab8997b', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '3da23d94e7f6c4f9154e85607ca664f51ddac96e', theme: "dark" }, h("bds-paper", { key: '1116b63f227558e29dfe1f6e95cb1320aebc34da', elevation: "none", border: true }, h("bds-grid", { key: 'e74081e42be45b924ddb75690e06649f68871175', padding: "2" }))))));
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
