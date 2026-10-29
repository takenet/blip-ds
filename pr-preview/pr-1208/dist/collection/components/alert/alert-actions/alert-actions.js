import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '585945a4c87e5dce91b25ee2c315b07db725f5a9', class: "alert__actions" }, h("slot", { key: '305bdf7a20e82c8568c3a4be3d59b15c4878e58d' })));
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
