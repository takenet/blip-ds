import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'a8f2cb2ce3df5d47b65e217f6ae060e0dbe25b41', class: "alert__body" }, h("bds-typo", { key: 'a4f995d19af8f1a949ea6a674a08b22b688d778d', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a8d28b830f5a327d37556f5083ca627aa3ae07d1' }))));
    }
    static get is() { return "bds-alert-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-body.css"]
        };
    }
}
//# sourceMappingURL=alert-body.js.map
