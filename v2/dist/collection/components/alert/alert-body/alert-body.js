import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '3f733d790f244dd54efe00ddfa273d92eb09db25', class: "alert__body" }, h("bds-typo", { key: 'adfd98a84f2eb23e8e839339fcda95928564e570', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'b433731043ff739a7d9ade91b4ab6b442535c7bf' }))));
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
