import { h } from "@stencil/core";
export class CardSubtitle {
    render() {
        return (h("bds-typo", { key: 'cecc4e7c6ae722683d30a8cacf18888242e0d592', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
    static get is() { return "bds-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
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
                    "text": "Set the card subtitle."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text"
            }
        };
    }
}
