import { Host, h } from "@stencil/core";
export class ExpansionPanelBody {
    constructor() {
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: 'aeb214141da040f582713e41c4f77b792a31a6e8' }, h("div", { key: 'f10248755268684bf79830c5cc0c7d249637bb98', class: "expansion-content", hidden: this.open }, h("div", { key: 'dceac2b1f1982823f794aa708435611ac6ce3878', class: "with-line" }, h("slot", { key: '3c50183dff075e11d35eb104afe13c3bcbd50007' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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
