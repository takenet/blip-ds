import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'd8404441e025e97eb7cc52c5ecc4d7aa09c2b99f', class: "alert__actions" }, h("slot", { key: 'f3a27d0408dcd3be94278657329304b92d030ce2' })));
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
