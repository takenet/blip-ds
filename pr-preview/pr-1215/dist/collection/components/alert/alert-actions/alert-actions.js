import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '7ff1c0697f39b5300fcf12e9ae22bbc10448f580', class: "alert__actions" }, h("slot", { key: '2b282f74e86e18f6c6223c40c4d756bd5930c9e1' })));
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
