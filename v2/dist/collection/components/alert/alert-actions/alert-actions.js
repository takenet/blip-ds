import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'fe2bb127c1ca57f346b34a51ca244e4c183c86b9', class: "alert__actions" }, h("slot", { key: 'd56da8892036a113cbd95e70c208a435829635bc' })));
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
