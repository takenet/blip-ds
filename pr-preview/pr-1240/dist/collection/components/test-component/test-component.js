import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'c5c9e4279ef930a58337263a343b8916c595fb00', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'cace31d70a5a238da798697970b9182509f2ece8', xxs: "12", margin: "t-2" }, h("div", { key: '01f5d9feeec98f2a94bdacb402c05e0e820e31e8', class: "titulo" }, h("bds-typo", { key: 'c8c700b80b6abb80d25981095f37484ca48da6f5', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '640afe50bf597a30e4f95e10070a9702a076a5a7', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'de10c2ab0bbd5b7b56ff6ae84cf3fbd7e6226595', theme: "light" }, h("bds-paper", { key: '2355b53cd122742a9ea8bcfd3816dc9e652d404d', elevation: "none", border: true }, h("bds-grid", { key: '7d73c1be16970e0e1c80e87d70055e82a6cb8c65', padding: "2" })))), h("bds-grid", { key: '57ec3c67a08c3230049ff84b2237eee32a4b1365', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '8cb23a0553d781d721314b39a6b265dcbe09f05f', theme: "dark" }, h("bds-paper", { key: 'af66ba4e00de770313f98b193c66ec062feb9173', elevation: "none", border: true }, h("bds-grid", { key: 'c165e546b1cd9eed6ed1af607f4224c3b489e33f', padding: "2" }))))));
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
