import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'fa4340099dfa6d8c94e123353cb2de6ab22aa8c5', class: "alert__body" }, h("bds-typo", { key: '71562cbd2bafd6ce7fa904772d3867cbecbf2204', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '41c2e124e4f43b0a922657110d4feab9e61fe2c8' }))));
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
