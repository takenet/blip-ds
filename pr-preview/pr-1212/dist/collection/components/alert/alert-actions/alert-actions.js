import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '99bc9a43ae932d0b6184f409f84603374467830b', class: "alert__actions" }, h("slot", { key: '65d01d4dcc63ab282aa2825ad05f26135fc74905' })));
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
