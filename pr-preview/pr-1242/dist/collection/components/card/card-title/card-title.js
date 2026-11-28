import { h } from "@stencil/core";
export class CardTitle {
    render() {
        return (h("bds-typo", { key: '52806a8ed8dea8296c7f1b0faf927a0cc2266d5e', variant: "fs-20", tag: "h4", margin: false, bold: "bold" }, this.text));
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
                "reflect": false,
                "attribute": "text"
            }
        };
    }
}
