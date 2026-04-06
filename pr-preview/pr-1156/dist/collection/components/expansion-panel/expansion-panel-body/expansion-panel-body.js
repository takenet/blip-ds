import { Host, h } from "@stencil/core";
export class ExpansionPanelBody {
    constructor() {
        this.open = false;
        this.text = null;
    }
    render() {
        return (h(Host, { key: 'c6eea3401fed479f4a0a5ec8cb92b4f00538c5d9' }, h("div", { key: '4cf516d111d15a018d0cc98943539f100984d562', class: "expansion-content", hidden: this.open }, h("div", { key: '7369f2f19487801c6458f7ec472d328adf08eda6', class: "with-line" }, h("slot", { key: '2d7e482529bbea2a4c04c7e3f00ce7a9c02ce27f' }), this.text ? (h("div", { class: "text" }, h("p", null, this.text))) : (h("div", { class: "circle" }))))));
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
