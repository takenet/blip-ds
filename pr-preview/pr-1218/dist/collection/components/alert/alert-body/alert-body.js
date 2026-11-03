import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'a68b51cf71a43335303410300b9f56256e2730d2', class: "alert__body" }, h("bds-typo", { key: '2170aab25c819425666940096bf150f75db5abaa', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '03b09904eb434bd8181e4746b1b0c0f5257ff830' }))));
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
