import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '38fbe1054f05ad1a5085e0f6096939d8e431dbeb', class: "alert__body" }, h("bds-typo", { key: '7b541ffbff8a121b01ba6ac62d1cb213bdcc058d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '9fa9ceb25365dbd3ab2036029a711dca3f9502eb' }))));
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
