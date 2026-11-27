import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '6ae09f1c41cf3abf4695c4069f184b785ab53eba', class: "alert__actions" }, h("slot", { key: '72a5436d63308fe084bb8ff2feeec64e5fa55cc8' })));
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
