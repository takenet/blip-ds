import { Host, h } from "@stencil/core";
export class ExpansionPanelBody {
    constructor() {
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: '60bf4fb3d6bc5d6a483b723aa424a0504990b9b3' }, h("div", { key: '0c4d81efe8ca2af62c969b60626a3cfed4e5a0dd', class: "expansion-content", hidden: this.open }, h("div", { key: 'c78e5d70669201e94a4361e774865a3c0d079da1', class: "with-line" }, h("slot", { key: 'd718d1570b459ba4dec3fc6cda9c44d1f7918e9b' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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
                "attribute": "open",
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
                "defaultValue": "false"
            },
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=expansion-panel-body.js.map
