import { h } from "@stencil/core";
export class AlertActions {
    render() {
        return (h("div", { key: 'e23b631feb052987ea6f3cf7d66302f65db44fc3', class: "alert__actions" }, h("slot", { key: 'b31518c670da81626e3ac6e6667a0e078fc108ea' })));
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
