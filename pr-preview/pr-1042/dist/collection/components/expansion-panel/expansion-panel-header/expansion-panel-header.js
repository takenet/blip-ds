import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '11ec89a6d12db11f4629d761d53aa945e928a389' }, h("div", { key: '58352eb801a31e1ae7b83373d91c8503ac8fabc3', class: "header" }, h("slot", { key: 'f85479d8b5b92ed149b9cc437998f9093d81fc80' })), h("bds-typo", { key: 'c5d2ba5b9c2b0339fac9ee5c0dc6fc2913cd3e4c', tag: "p", variant: "fs-12" }, this.text)));
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
