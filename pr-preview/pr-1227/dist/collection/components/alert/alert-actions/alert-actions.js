import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'c99d042de4e1f15e0583bf7e9efc7b31ba92bfb8', class: "alert__actions" }, h("slot", { key: '5037720f7f25a341ca6517e0b1d187d666de617a' })));
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
