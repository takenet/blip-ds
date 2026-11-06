import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '931469f1460ced4a47fb76e1550e2a778c79d1d0', class: "alert__actions" }, h("slot", { key: '562c48632214f287fa7acff298948bb66ef9ebaf' })));
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
