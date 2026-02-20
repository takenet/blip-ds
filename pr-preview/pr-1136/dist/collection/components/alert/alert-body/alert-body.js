import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '30550748f03591a681c63d837474a1d027bea9be', class: "alert__body" }, h("bds-typo", { key: 'd4420ee3cf9457b147503790ca02358d4d8d54d5', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'aa0a55ead02e0ff9bb3ed8e007f9680b23e62bcf' }))));
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
//# sourceMappingURL=alert-body.js.map
