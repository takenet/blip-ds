import { Host, h } from "@stencil/core";
export class ExpansionPanelBody {
    constructor() {
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: 'b3c42637a5081daa576792834b8611cac9545269' }, h("div", { key: 'e98926f04cd33af32847e98f90caf6ff308cdd7b', class: "expansion-content", hidden: this.open }, h("div", { key: 'e88d67a6ae5054e5bc1d3e997def9e4f4b44d3cd', class: "with-line" }, h("slot", { key: 'a1ddb03b2394adce14c9c5f600c9566d06e90234' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
    }
    static get is() { return "bds-expansion-panel-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["expansion-panel-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["expansion-panel-body.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open",
                "defaultValue": "false"
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "null"
            }
        };
    }
}
