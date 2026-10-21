import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'ff7a3036059d041c77c79a856bee1b846d878635', class: "alert__body" }, h("bds-typo", { key: 'cacb3dbb5d74c1600f5b1df30a54643e15ced6f9', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '75417badf23c0feb5d0d99facf3f9d5c0b8d862f' }))));
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
