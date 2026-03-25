import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '160caf7fb88e9cae0869faf7f2161154cb8ba12a' }, h("div", { key: '1fe047be9617b0da910a31930c38e5c9600d0aee', class: "header" }, h("slot", { key: '2bfdeb7b4b1d413a3d1884655683019cea1ca907' })), h("bds-typo", { key: '8d41907d7a948576ac15710c3700e1103c22ab60', tag: "p", variant: "fs-12" }, this.text)));
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
