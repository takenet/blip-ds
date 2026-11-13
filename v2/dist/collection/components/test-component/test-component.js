import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'daf0da517a22d841f74bd8569336b258cc08ca6c', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'de235b9086bf176caa544feb55fad93452d5d57e', xxs: "12", margin: "t-2" }, h("div", { key: '0ac694060fec3fe85ba7ccc764535bfd6a3e559e', class: "titulo" }, h("bds-typo", { key: 'b584231600f558a24fb7c06f942398a41398c534', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'f9b108d8793007969ea39c3eb4d047d054375bde', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'de739ee7708d06a5e1f57708bd0807ef83354b77', theme: "light" }, h("bds-paper", { key: '73454dfb6308aedb3c0d6ededa31d8736d3ef0b2', elevation: "none", border: true }, h("bds-grid", { key: '639f0c07aa9c38c1beaba66830aefd77a2ecf00a', padding: "2" })))), h("bds-grid", { key: 'c4828419ad0bad7d77eab174c956175f97a05391', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '7f2f5ef8f5031c1dfca9e5d06d36e6373abed794', theme: "dark" }, h("bds-paper", { key: 'c4da30ff167a2af510b8105e331e6b4514aeae15', elevation: "none", border: true }, h("bds-grid", { key: '3176eb9517e269947f36c96e431a52403c48ba3b', padding: "2" }))))));
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
