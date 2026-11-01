import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'ec44099d7a9ed0c136ec5b9347028e571c316dd2', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '77cce9054980f8e1750f7d29550188c406e09976', xxs: "12", margin: "t-2" }, h("div", { key: 'd95607c606b29f81ec9fce2f22499acb32e7be94', class: "titulo" }, h("bds-typo", { key: 'fac026857fe9c4b9e7751b6f8c1b5710be147a7d', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'be0fe88e4b3400930ef35ffa9079ab945eb0c05f', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '5b97b298f95061453a8d25032e3079474c9a7c10', theme: "light" }, h("bds-paper", { key: '119658f46c4a55f9fe3ed49dcc5780a58d0da066', elevation: "none", border: true }, h("bds-grid", { key: '7743978f7a1278284a7540c5d7328275178d7161', padding: "2" })))), h("bds-grid", { key: '3945bdc77c3ecec258cedde2b67f2b05e1a3017d', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '4173555023fe7babf6c1f064a767a8e03e3b50fa', theme: "dark" }, h("bds-paper", { key: '45ba57ce0e4d40b42fa9ab185fc22a52e9993970', elevation: "none", border: true }, h("bds-grid", { key: '86f8df872a07039102b99b5667eaf09c4d08001f', padding: "2" }))))));
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
