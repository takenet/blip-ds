import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '4bc48ee6c7d5d279c2e6b1cf7db3dc3dc788c4ad' }, h("div", { key: '745ce8b10876da58ba5b126c2e31b4045b52e9f9', class: "header" }, h("slot", { key: '3225734edc2a4d1f8243bbeb97263deec9d3e47b' })), h("bds-typo", { key: 'ec98b52ecfd441b2f809b387f637b4c7aba367e8', tag: "p", variant: "fs-12" }, this.text)));
    }
    static get is() { return "bds-expansion-panel-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["expansion-panel-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["expansion-panel-header.css"]
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text"
            }
        };
    }
}
