import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: '89feece1508f2564f954c9a26dfc55388e048539', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '419f3e23578ba5cccc06dd8417a708be19cb4a60', xxs: "12", margin: "t-2" }, h("div", { key: 'b6630d04e4a5bcb773370ddacb12920a3993cd3d', class: "titulo" }, h("bds-typo", { key: '769320d4e52f42f39dd79bbb200a873c527c23c7', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '478f73272300b2349ea0d0797f52449d61816289', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'b85d5010e08316f597c60cd7a28c668fdfdb9cd1', theme: "light" }, h("bds-paper", { key: '5836849349eb626f134af84bcf954e0bf0d13b31', elevation: "none", border: true }, h("bds-grid", { key: '39410c56a93162fe1113741a3255891e05e3d42d', padding: "2" })))), h("bds-grid", { key: '7ec6668dc3ac4a0f9d3b9666b698a2913ccd3eca', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '9fc0a24c0eff4979c29f09fc10b13739dfd3253a', theme: "dark" }, h("bds-paper", { key: 'e5daa7e442724c83a2afcf1e18832ba048025dd2', elevation: "none", border: true }, h("bds-grid", { key: '1a30b1268f9a57f1ca006350167b109c18a293c0', padding: "2" }))))));
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
