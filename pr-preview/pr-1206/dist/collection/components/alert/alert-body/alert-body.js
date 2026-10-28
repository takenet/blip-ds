import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: 'e4d173a987339500087341ff0402b17b8e751d2e', class: "alert__body" }, h("bds-typo", { key: 'e6f385124c5068b83c806ef9d1c710fb6aa19868', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '5ce2788ce6f335a2cf3df43ba876b8ebec5db8f1' }))));
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
