import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '9322172ddc4692521955cb8a4c74e0b8d3d869f3', class: "alert__body" }, h("bds-typo", { key: 'b20c6fbd30d392379d821aff271e65a004229170', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '4ae9b23f0ca473f1ac5a3bf4da86e87df69d3f71' }))));
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
