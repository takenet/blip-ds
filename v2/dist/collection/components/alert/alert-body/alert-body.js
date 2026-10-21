import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'a6b9dcae8ec98e4f52e2fc3193c6e5ce6fb08198', class: "alert__body" }, h("bds-typo", { key: '4b66b0049aacdb61da6d75775bd90b2b3e79af9b', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'b057c3c9f66edebbd27792361f31da3b97899b5a' }))));
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
