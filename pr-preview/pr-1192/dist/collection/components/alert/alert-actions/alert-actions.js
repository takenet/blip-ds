import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'ce6b28c327d40c664b05fbbfe661ca456fdfad10', class: "alert__actions" }, h("slot", { key: 'b2a3680e37100719bbcdc6262a548d9496b06b7b' })));
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
