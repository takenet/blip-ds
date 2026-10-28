import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'cf98eafed4c3a989c4dfe1513038d4d73f734646', class: "alert__actions" }, h("slot", { key: 'c29911f704fadb15c21dba3d59fb77ca8cd63a0d' })));
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
