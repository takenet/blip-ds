import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'cd758a88f7d7a9d755786969caab889c5c346ac7', class: "alert__body" }, h("bds-typo", { key: 'fed4c82874a9dc3e985efb642b10023779ac5fd4', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'af2fa2d5135c5314dcc12b0d037b9dadefa4f9fb' }))));
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
