import { h } from "@stencil/core";
export class CardSubtitle {
    render() {
        return (h("bds-typo", { key: 'fbb8d9b876c08fc9be743e82fe1bbfcedc3119a3', variant: "fs-12", tag: "p", bold: "regular", margin: false }, this.text));
    }
    static get is() { return "bds-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
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
                    "text": "Set the card subtitle."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=card-subtitle.js.map
