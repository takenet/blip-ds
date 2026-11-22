import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: 'e7cbbcbab0da92a11c9d1f58c35db39c1275c37a' }, h("div", { key: 'dd92ea14738fb533ac407343ef801e1f0a6ff81b', class: "header" }, h("slot", { key: '6b83b8c1ab7de8d71df1333ec2fda93a47129cf2' })), h("bds-typo", { key: '9bba2719a418ceeaadbcccba5870be44ca3aacf5', tag: "p", variant: "fs-12" }, this.text)));
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
