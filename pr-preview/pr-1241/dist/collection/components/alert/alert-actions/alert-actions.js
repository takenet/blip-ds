import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: '23d58a5067852506e0517338a2f1230d8b6d643c', class: "alert__actions" }, h("slot", { key: 'db00928c278478c29ff73e3fc3646f0d25edb20b' })));
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
