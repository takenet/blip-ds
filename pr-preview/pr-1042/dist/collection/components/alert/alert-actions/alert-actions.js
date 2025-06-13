import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '3dabe1d71e6636d7dcb2674b954ddfba99998f04', class: "alert__actions" }, h("slot", { key: '51aa1a3b95f55efeaca11b3a59496a92c78a8247' })));
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
