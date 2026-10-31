import { Host, h } from "@stencil/core";
export class ExpansionPanelBody {
    constructor() {
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: '99714b93f7af010cf1ec54f95cf0e8b92896fd7a' }, h("div", { key: 'ea323a154c4767cb98b20fd5c96fdaf70aa20b7d', class: "expansion-content", hidden: this.open }, h("div", { key: '2b1578725e0b03a5ad84af7c2264435616db6c0e', class: "with-line" }, h("slot", { key: '9c688e9a5b48d647f7a2b8125545aa3303693e09' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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
