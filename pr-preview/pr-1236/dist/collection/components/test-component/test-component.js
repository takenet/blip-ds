import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'bd4f01e968c39973dcea1ba873b7c52e0c98bac7', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '2edc7b4376291645a272c21fc8fd265c3063783a', xxs: "12", margin: "t-2" }, h("div", { key: 'b8f64a82ef09146aaa34fb3d48a6240c7f96d298', class: "titulo" }, h("bds-typo", { key: '53eb671ba5030ea77bc922d914a0cb62257b8483', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '6bc303c3b5f1afe693a6fa6a6014a6abfb5b5805', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'ab9154cc4613912745456697ba4e98a064605d5b', theme: "light" }, h("bds-paper", { key: '50f745d818165c85816ba38b8ee5f11205d498b6', elevation: "none", border: true }, h("bds-grid", { key: '5e3037517bde2cd1305565b4ff9dbfef84d634cb', padding: "2" })))), h("bds-grid", { key: '59d071026bab13a7ff289d2326099a393bfa1976', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'dbe22ccba8e6fd400dc20e90eb89e8beafbc17ab', theme: "dark" }, h("bds-paper", { key: '0af3537ad76b21c032a17876ba1bbf65d90f3cdd', elevation: "none", border: true }, h("bds-grid", { key: '1d6b94ab0f803f7eb9808b44334ea3fde512246e', padding: "2" }))))));
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
