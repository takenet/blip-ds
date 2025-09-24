import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '9515b5db923454883f96819e0f22a041ea0c19af', class: "alert__actions" }, h("slot", { key: '3d647c77228153d4c87ee547ab7d15e6f3f210a9' })));
    }
    static get is() { return "bds-alert-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-actions.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-actions.css"]
        };
    }
}
//# sourceMappingURL=alert-actions.js.map
