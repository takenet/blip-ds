import { h } from "@stencil/core";
export class TestComponent {
    render() {
        return (h("bds-grid", { key: 'e3e3655e90f98b7d598974e2c8c95f18c084b03c', xxs: "12", padding: "x-2", "flex-wrap": "wrap" }, h("bds-grid", { key: '06e4c375b9db9665fbcc80a2fccae5d4366e064b', xxs: "12", margin: "t-2" }, h("div", { key: 'd9200307fb52356825def18115c3a3ec72d774c8', class: "titulo" }, h("bds-typo", { key: '855e372a53db7e65a65cfd730be2e2589defbbe0', variant: "fs-40", bold: "bold" }, "Titulo de teste fora de temas"))), h("bds-grid", { key: '5bc716c67a514b6dcf1ab5209dc77935fb96c1c8', xxs: "6", padding: "r-1" }, h("bds-theme-provider", { key: '85fce043ef79a3c7073f54186496d84a870bf631', theme: "light" }, h("bds-paper", { key: '93fff5c911827694665c74b2fa3d41d1a4d28efd', elevation: "none", border: true }, h("bds-grid", { key: '67016ce4b273ff8202f7e5396e301ba89df5e7e1', padding: "2" })))), h("bds-grid", { key: '48747baa36c7e8e3f538e5c171d2ca21f1a92d72', xxs: "6", padding: "l-1" }, h("bds-theme-provider", { key: '24d019a1d41f01ccb06f61ce9fb4ca428c62c60c', theme: "dark" }, h("bds-paper", { key: '282e038db6ecaa4852d73b64a3f903e7ff483a0e', elevation: "none", border: true }, h("bds-grid", { key: '4d5a888836d58a8fe6c2d8ee949669ff9274dee0', padding: "2" }))))));
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
