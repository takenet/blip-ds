import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '40b2323c307e310f7a8386e3e10b2c372e7506c0', class: "alert__actions" }, h("slot", { key: 'e468f7caba1e57d7cde9d4ab1d15b4af90134bc5' })));
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
