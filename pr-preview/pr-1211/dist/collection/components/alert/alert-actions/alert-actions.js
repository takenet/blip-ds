import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '3862d440cdf0795decc8c245e6ec4f21d7bfc1e4', class: "alert__actions" }, h("slot", { key: '07ff2a7544f2887000420ae70563e67eeb2ccc57' })));
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
