import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'fbf6e3dea3a2ecf2b8d6dfdc4f83fa06b8943ca6', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '77bad0463aac149ae0ab8dd129c72b8e37df1068', xxs: "12", margin: "t-2" }, h("div", { key: '4d0ee91761e040ba9610ddb050ef13700e64b109', class: "titulo" }, h("bds-typo", { key: 'a219752b8599d3487c7e8834b464b19138de8543', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '5d626934efeb5b177e5638c27eb8040cfa8f5e53', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '55017c0d71a2d2aac35f4cc4d4edfdab26d01536', theme: "light" }, h("bds-paper", { key: 'e0c8b388d441fa387393523cb4214f280ab26206', elevation: "none", border: true }, h("bds-grid", { key: '642c50526659da2cf6dfd648fc074916e240a3cf', padding: "2" })))), h("bds-grid", { key: '43e24ccd3164d0b4ef5b1136a6579dbc3f240248', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '33190d06e4082e92330aefec3f5d42adcc631142', theme: "dark" }, h("bds-paper", { key: 'a8ae1da5186969d82f35467c0daf20026d080041', elevation: "none", border: true }, h("bds-grid", { key: 'd8bef5d7c19c1d0e4a4d27edd0a839236e2dcccb', padding: "2" }))))));
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
