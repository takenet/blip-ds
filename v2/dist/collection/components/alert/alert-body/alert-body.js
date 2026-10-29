import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '6f73ef079771573117e5731c42ef6c3fe4099f98', class: "alert__body" }, h("bds-typo", { key: 'b5586f57a252e0992ca115d7b0eeb3f1cc88711d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '1d2d3d09ed78fb6d42e4c53d5a8e60ea489c1417' }))));
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
