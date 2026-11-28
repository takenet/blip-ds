import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'a185ea20d9c93cf742c9048d89b9eb680f666f07', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '2bbd6086cf6995e974692f27398e866f1b4058e5', xxs: "12", margin: "t-2" }, h("div", { key: '45397a6462dfdfb46a31e138b6a4518fc9ecd45d', class: "titulo" }, h("bds-typo", { key: '08063f24844504961fc2b43a643b14ce593254c4', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '82375b435ebe8ea8a76769b3fa2bf8ceff615fce', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: 'ad899aca27c1777c121aefdac295f53c9686f66e', theme: "light" }, h("bds-paper", { key: 'f97bf690cb9a2631b4c2ea421b7d7faedf8512b8', elevation: "none", border: true }, h("bds-grid", { key: 'ad74d0e017a32a410316ae5c92c39b6c22d89c8e', padding: "2" })))), h("bds-grid", { key: 'c194d7b11018df98d357a727c3232edf90289b47', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '5c4fa55252d758ee1820e55ebfc249e1957e2ab5', theme: "dark" }, h("bds-paper", { key: '85a15465327b3da1ed0ab0458507f98f5a3e0d52', elevation: "none", border: true }, h("bds-grid", { key: '01991e4738e7b739d156339d9f9414d551c908b8', padding: "2" }))))));
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
