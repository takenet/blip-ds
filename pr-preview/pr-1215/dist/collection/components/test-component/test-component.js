import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'cd7f467fca973bfe0cd7f034d49ea40853ddc940', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '8a112715c86335655c067d24bed377a3c91efd36', xxs: "12", margin: "t-2" }, h("div", { key: 'ca62d19a2f3a2274c0b6c5222c48a3fca51f4d0e', class: "titulo" }, h("bds-typo", { key: '2657fc5e3bc78f237bf51d483013f9a7adb1f664', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'd63188caaf37780f0c6f29d85620898cc8d3e25e', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '80ba73ff75d25f88b5cc2883afbb830f379c7b7a', theme: "light" }, h("bds-paper", { key: '9bfdca9f2206e4323ebf562430b9129842c1429b', elevation: "none", border: true }, h("bds-grid", { key: '916d0f55e501885835e36704f2b76645b9f4140f', padding: "2" })))), h("bds-grid", { key: '1f1580fec10f65307c6e1dc0c05d40a060475cc6', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '7b61c316ecc4fb30266db93a5a9d692b3efde19e', theme: "dark" }, h("bds-paper", { key: '9012da0369a46ce930a60ef368cf40a6753f0ffe', elevation: "none", border: true }, h("bds-grid", { key: 'cc57393b5bdc077c99532ff9462653a8ac6b586e', padding: "2" }))))));
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
