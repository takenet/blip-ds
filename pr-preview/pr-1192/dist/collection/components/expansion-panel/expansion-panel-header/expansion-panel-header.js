import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '04a98b50bf4a814424f5be0fe20611cf4b39557f' }, h("div", { key: '5116a99ce2121db25f5f53b8301df9c5c9a99a17', class: "header" }, h("slot", { key: 'e0a77242ee41cb0fc84bddde97c2325858bf4b7f' })), h("bds-typo", { key: '6a0caf8897b2f7552e96b2046f55a761779ec179', tag: "p", variant: "fs-12" }, this.text)));
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
