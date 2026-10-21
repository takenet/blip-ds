import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'c69883a2888367226eaf2a0338b3ff4148d78aa1', class: "alert__body" }, h("bds-typo", { key: 'be66fa0eed3e67d0469c3510829c3ca0405ac7eb', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'ce5d1f231538c3eec5d0849468443b31d39b0f30' }))));
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
