import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '7aa4ffef5b45b8a8ad332c6dd61db2d9a200ad05', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '73f6f912415818cfdacb5f8fc64bb8756090a2e3', xxs: "12", margin: "t-2" }, h("div", { key: 'aaa49c56983122efc8a81c22fbb9da24866a9729', class: "titulo" }, h("bds-typo", { key: 'd6b916b830bfa63c256c1dc8cde1fac8a01c7bd7', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '88c5cb84e05aa7b457fcc1e8d2bfe9ee9bcc2a69', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '96e8cc8d2de120579c36edc258e4ed67df015486', theme: "light" }, h("bds-paper", { key: 'af1ff2ca28f0b95354a3a67951c914f6ced5ecc0', elevation: "none", border: true }, h("bds-grid", { key: '948d62c015377eebc552756dac13861f00019860', padding: "2" })))), h("bds-grid", { key: '3b432ad7353956dd3f03f93b20a5720baf745755', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '99cd4b0865b48777b32e27edfbe6548341a0a46f', theme: "dark" }, h("bds-paper", { key: '13d1ebdcb798ceb07c150f93ab3c97b24e152dae', elevation: "none", border: true }, h("bds-grid", { key: 'c9dce10b9765d970420062748af44e1da2f24767', padding: "2" }))))));
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
