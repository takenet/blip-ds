import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: 'a7094a7530f07c6ac9b984f9e3d3499d370e51fa' }, h("div", { key: '00b00cad2e10ee9b425deca218fbdfb34d79c1bd', class: "header" }, h("slot", { key: '41e8c9c7099adaf1035304348f1eec1d2ee220f4' })), h("bds-typo", { key: '3eeee774ed6b1a158e11fe0c2213710c7e2f326d', tag: "p", variant: "fs-12" }, this.text)));
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
