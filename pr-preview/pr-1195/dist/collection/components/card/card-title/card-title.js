import { h } from "@stencil/core";
export class CardTitle {
    render() {
        return (h("bds-typo", { key: 'd0df4eef95cc47118cbedf7b7774223bfa1a07ab', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
    }
    static get is() { return "bds-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-title.css"]
        };
    }
    static get properties() {
        return {
            "text": {
                "type": "string",
                "attribute": "text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the card title."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=card-title.js.map
