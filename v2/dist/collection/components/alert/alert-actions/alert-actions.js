import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '3ec160d829d2d75d45e3b40b63e0e6ab8cd7626e', class: "alert__actions" }, h("slot", { key: 'bfa04b85f0c58b9d1be960438e6c22ba3a4ab2f9' })));
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
