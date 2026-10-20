import { h } from "@stencil/core";
export class AlertBody {
    render() {
        return (h("div", { key: '724cab3d776ea0d70de0958b43ee1cec05964c26', class: "alert__body" }, h("bds-typo", { key: '9b130ace1d70838867edd3d26ca57ed3c999d045', variant: "fs-14", bold: "regular", slot: "body" }, h("slot", { key: '2d6bf86775417c9929c0fce86b933b8342ad9f92' }))));
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
