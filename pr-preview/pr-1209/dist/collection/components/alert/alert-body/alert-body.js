import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '42a725278676da0877658f460f666b542c567aa7', class: "alert__body" }, h("bds-typo", { key: '7707331ac3e75a37ebe376785bf607b6f0a34334', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '839bced36600ebcf36a15e487da56ab4c9967463' }))));
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
