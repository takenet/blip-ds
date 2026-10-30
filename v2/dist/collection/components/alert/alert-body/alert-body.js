import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'aba27156a437b5b1517cdc3b813d9db884fa746b', class: "alert__body" }, h("bds-typo", { key: '946450b7faad5f1310014a022ae696dff91388cf', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '42e56c6c5a43cdd5f034879f92e76a9865fac588' }))));
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
