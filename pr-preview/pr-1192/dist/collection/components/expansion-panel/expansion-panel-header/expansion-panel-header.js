import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '6a28592119709a47081de7dc91640ab3ce5871b1' }, h("div", { key: 'b2bd40848cbc92ef859c5bb339b158f5a9257bfd', class: "header" }, h("slot", { key: '51cc23d8da9b3d332fb8641e35ee0373e0474fcc' })), h("bds-typo", { key: '36980f48d7ea2c64bc3c537ea212e10b0411b339', tag: "p", variant: "fs-12" }, this.text)));
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=expansion-panel-header.js.map
