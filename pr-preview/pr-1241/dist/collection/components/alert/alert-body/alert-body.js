import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '93f5112d1e28ebdfba7154cf57b2a87a3b82bf8d', class: "alert__body" }, h("bds-typo", { key: '214289744a9c0110590c99f2dd700aec8fcc987b', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '2af606b84c2863c3e3e31fbffee61554476ae867' }))));
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
