import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '039746a27f3e79119a3c3cd2a80af307c98ec4fd' }, h("div", { key: '85e1e19b019b42b06e3f9a7b7d046bb429323a96', class: "header" }, h("slot", { key: 'a648a90239e2bf9aaebd6cdf3d53b1bf2b51dec2' })), h("bds-typo", { key: '5fa30ca0fe7095821cae2634edbfa7461aa4c1ff', tag: "p", variant: "fs-12" }, this.text)));
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
