import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '7d96f28b369faefb144cd9f79878c6702b529766', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '9ff881858de6e89e21973844694d4f73e299964d', xxs: "12", margin: "t-2" }, h("div", { key: '50ab4a37f892186c348998193795bca62922794b', class: "titulo" }, h("bds-typo", { key: 'af6c27a793c54b034903bdaa3e29cd0535c257ad', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'a417a2b7cd3213646726e488af4442203189a1b2', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '7d2f81faa2de35686d6ea6b38aaa1d00175e8198', theme: "light" }, h("bds-paper", { key: '6aa72408cf31846f1d10a07e433cf88ff7c08690', elevation: "none", border: true }, h("bds-grid", { key: 'cb0ee108f53270ac58819b0c60ace5c271dcb503', padding: "2" })))), h("bds-grid", { key: 'c3a72cd6ac539afdbe22087afc1615e13e0a8b90', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'b40f139153b0cf07206ba16373224741ef9369eb', theme: "dark" }, h("bds-paper", { key: '1bb9617977829b679cee748909331bd0c714cc15', elevation: "none", border: true }, h("bds-grid", { key: 'bbe50075bc0dc754dc8698ac99f956147afc4993', padding: "2" }))))));
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
