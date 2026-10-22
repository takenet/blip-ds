import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'ec87d9ac0a21be0c20cd426ade201bf0efbf91ea', class: "alert__body" }, h("bds-typo", { key: '01d58f13f3291a46c97ee61a2ce37dd88adf0140', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: 'a294e62cceb02fb08fd20a3c5363d7b38d49665e' }))));
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
