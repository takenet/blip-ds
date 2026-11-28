import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '1403f4d6fbbdbbf855e0949aaffe8d0ebd894fec', class: "alert__actions" }, h("slot", { key: 'a45d441c5d98b38febf690cc4926d8c1e67bed53' })));
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
