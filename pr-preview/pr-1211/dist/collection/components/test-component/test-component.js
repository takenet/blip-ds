import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '7ae7427a26e1184d4555992be6cc0af967ad9d79', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '179a4c5d9bbe049d0248ccacfe39e8a926f547b2', xxs: "12", margin: "t-2" }, h("div", { key: 'aef870c719ed11ee42a236faabdeebb7dd3ee70a', class: "titulo" }, h("bds-typo", { key: 'a06c48076d73dbcd960ca6c5757b5da85faf3b94', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'cea5f9e6ef323733c160aa1100276fa4cf56dc8f', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '226daf617a3f164090eef95cd6633b625adf483b', theme: "light" }, h("bds-paper", { key: '99eced167318ab8d2b680914334302215ceac94b', elevation: "none", border: true }, h("bds-grid", { key: 'f39dcc63a2a3b59133cd25025de309651a1719e3', padding: "2" })))), h("bds-grid", { key: '7034b4759ca8ab9e9347a1659a02c9c33ce5da37', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '069bcd498cbb388f30d5f1f71100a10fd6822004', theme: "dark" }, h("bds-paper", { key: 'f6bd1f2d0a5aa6dacc0d9312fd0110fa10994638', elevation: "none", border: true }, h("bds-grid", { key: 'b55d3c7817bb6609a6d677f041630a0c43d64eca', padding: "2" }))))));
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
