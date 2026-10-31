import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '56241265253ebe70a0dda45e2d73acacf66abe97', class: "alert__actions" }, h("slot", { key: '14779e17a605be4928c991077c489295a5016c8b' })));
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
