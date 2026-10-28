import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '889ec5c263cbe5f99f628365290a8f5eb9a26d8b', class: "alert__body" }, h("bds-typo", { key: '41221151c1a74d389fb91849e6e0e92049a4144a', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a3a8eb2ad69ddb5c3f195cf8923d4dbedff22c96' }))));
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
