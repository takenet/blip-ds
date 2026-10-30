import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'f5b084c5636699486a995d8c458fa67a1ff99740', class: "alert__actions" }, h("slot", { key: 'cc86b2924d44ced4c51b6c42c6ac4a26c1d61728' })));
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
