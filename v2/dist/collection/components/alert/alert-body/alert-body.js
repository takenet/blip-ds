import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '307afe7132d915fc2d77f3a019d1cae19adfb841', class: "alert__body" }, h("bds-typo", { key: 'c63101671eb641c1e00745d38c5390be7d400c8b', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '3701467c91988b68df69c01099389c1e57025b48' }))));
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
