import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '4c3c3713b86c0099f5ac7434b913dedf02c0a37e', class: "alert__actions" }, h("slot", { key: 'c99250c4ece770e920823d4784f34aecc192d49f' })));
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
