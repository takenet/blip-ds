import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '09fe269436a2d31b9e16bbc24c7043aa81808999', class: "alert__actions" }, h("slot", { key: 'a142ee4062babe905f0fcfa77b74c79c407b628a' })));
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
