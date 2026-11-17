import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'ba252bf08015b2c21e9f99203293895a3ba42092', class: "alert__actions" }, h("slot", { key: '581b41828cba948fde17b2dd83538b684e0f461b' })));
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
