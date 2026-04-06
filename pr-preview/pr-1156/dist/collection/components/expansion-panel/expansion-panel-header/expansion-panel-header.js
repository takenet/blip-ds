import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '0ad6872e50b80c7a00518b84f11ba71da7033183' }, h("div", { key: 'f35ae97d473e77d88f47190f110c4ea571b76960', class: "header" }, h("slot", { key: '3f0e60bda5aba37cc4ed2bd7e7438edfb4f71302' })), h("bds-typo", { key: '8a7eba1a587a4266fdd1f3a93ee23d9213ca0336', tag: "p", variant: "fs-12" }, this.text)));
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
