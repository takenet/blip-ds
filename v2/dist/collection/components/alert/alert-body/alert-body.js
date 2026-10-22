import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '6b327a5d7e798420c941735ef2b20745535131cb', class: "alert__body" }, h("bds-typo", { key: '9f37aa3033f7319b5c063864bfb0196620cc1883', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'c548c697ee217e296b5181a53ee980a52181e5af' }))));
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
