import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'a28928271a49bcbf70c315905c3f8a8d45aaa1f0', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '5a04365b2d7236bc6860dd3218516852d7a6f036', xxs: "12", margin: "t-2" }, h("div", { key: 'db1b8aa5fa00c2e0353f353e92393ae3d6fd4656', class: "titulo" }, h("bds-typo", { key: '47ab919d7ff1a910a306b7ede565fc2a9918c778', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '18a19de5d9721684c01a5674df3edcbee267fd37', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '7b8dfd08abcee76c38284a0eab4f3ebd62968b29', theme: "light" }, h("bds-paper", { key: '70f8aeb82eef402d0b1102b56003d418a140d642', elevation: "none", border: true }, h("bds-grid", { key: '5531edda3b7dd1e761c2a1d1e93ca2fab181f022', padding: "2" })))), h("bds-grid", { key: '4943ca6b9593adafcbebef5dcc1062bd5ef3fdb4', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'deafa64b18d4e88fe94367a726862f6d38cd7cd5', theme: "dark" }, h("bds-paper", { key: '1f8938d3df7acd57a788d83d0685139de5717931', elevation: "none", border: true }, h("bds-grid", { key: '6ced66939d21ebd6ed8eb299a8726bbcbdc8c559', padding: "2" }))))));
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
