import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '6dde06b48a3bff106b122e07c7fd70d5b7f4f0de', class: "alert__body" }, h("bds-typo", { key: 'b92030bd9361ad25094d6203c39844d4acd7af2b', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'c7da28f4391e2b529ed1177d5e8ccdc2cc9355d3' }))));
    }
    static get is() { return "bds-alert-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-body.css"]
        };
    }
}
