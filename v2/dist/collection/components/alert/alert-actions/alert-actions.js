import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'ff8a20bbc163ae8d770eb9cd8cb2f88d4b791de7', class: "alert__actions" }, h("slot", { key: '76c7088d13dfaf6258e3be94b970e4809988ceff' })));
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
