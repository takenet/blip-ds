import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '0bdb6b6c3fd493027d4aa0ce7a93470de16950d6', class: "alert__actions" }, h("slot", { key: 'bc386a1e608d637c2a3de213871e8ce957a99b8c' })));
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
