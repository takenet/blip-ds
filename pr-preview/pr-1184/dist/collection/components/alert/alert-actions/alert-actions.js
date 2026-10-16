import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'b1c3f62cbe2eec14cad2dd762e0c7bc80b7ff039', class: "alert__actions" }, h("slot", { key: 'fc5693639d155a35ef64bbcf4f50a34bd5df49c9' })));
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
//# sourceMappingURL=alert-actions.js.map
