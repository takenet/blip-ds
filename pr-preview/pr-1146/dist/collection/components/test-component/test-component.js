import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '88efd6d547891be214f5fefe9348213cc39a3414', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '2fbb560353160afbe6f177ca27f2f940e67cfb45', xxs: "12", margin: "t-2" }, h("div", { key: '5e57a4d2586c9f69224a7e360dc963c2d3f47366', class: "titulo" }, h("bds-typo", { key: '015f54de57ee7180d2476dcabc6eded6a5969d09', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '22eaf66af5b786f73ca4fca8f8e4abc211f9ee94', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '62243b6d6d204c49160228a6492d4f11f806c63a', theme: "light" }, h("bds-paper", { key: '3bdc503e8021e587fa37b64729c702bddd1145cc', elevation: "none", border: true }, h("bds-grid", { key: 'aa64589fe02879b3ffe10915ff7d237f06e92cbb', padding: "2" })))), h("bds-grid", { key: 'b23b2a8eb164847c305f922c5ac5a0322bdb20bd', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '0d97d4e82b7f29492b8feb346912c4f56077b986', theme: "dark" }, h("bds-paper", { key: '8bc125ddfbc88305d7e2df36682f1e0d10ccaa85', elevation: "none", border: true }, h("bds-grid", { key: 'e9bab4f325fd3aec2dbf2a22aee4620c53142171', padding: "2" }))))));
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
