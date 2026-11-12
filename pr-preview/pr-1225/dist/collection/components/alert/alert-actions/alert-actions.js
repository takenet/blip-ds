import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '307b4c89ce045111e52e3a653906394cad04ec29', class: "alert__actions" }, h("slot", { key: '12dc8a663f8fef629454fbf6671a7e147bc60b3e' })));
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
