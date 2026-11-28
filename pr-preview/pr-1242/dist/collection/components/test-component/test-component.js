import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '48e3f0e8739e05126cb2dd41cab0fdeac4c29dc1', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: 'a058e26f1b151e9ed535d21a9895210420e91d61', xxs: "12", margin: "t-2" }, h("div", { key: '374d4d98bc4152f76fd8d3b9369fab9f18722ab1', class: "titulo" }, h("bds-typo", { key: 'a1ee1aa43f0757509852a407daf106c1e40c2451', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: 'e65b0bf7375fe8ac0338cf687d65d62a3c0953b5', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'b03dc6b637ecc2beeda34352a981008ad0467d65', theme: "light" }, h("bds-paper", { key: '769758a3b22dfb1ec2f345eb442f3d86e4b49d76', elevation: "none", border: true }, h("bds-grid", { key: '83fa38efbb5df2d54c2c8ce39f160d06a6652c13', padding: "2" })))), h("bds-grid", { key: 'e4f191f2c814a1cdaaab3357ee98af27bf328c52', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: 'ad947bc89a28f12fb650208daf89ee167ada0f31', theme: "dark" }, h("bds-paper", { key: '21bfac90fbc117b0bd5dfeecf0a8f30d039270b8', elevation: "none", border: true }, h("bds-grid", { key: 'b072ea394cc494d2341ff1f963da2d0cf40aa444', padding: "2" }))))));
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
