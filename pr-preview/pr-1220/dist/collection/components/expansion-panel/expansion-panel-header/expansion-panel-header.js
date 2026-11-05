import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: 'f5c67cd7f35aba8702db69ebb7b8b2599d73615c' }, h("div", { key: '5eb82c3518bcd462a88bf3a403f352e4b1124e1a', class: "header" }, h("slot", { key: 'f92cd129fbedb4adb31837625805e4606d0155cc' })), h("bds-typo", { key: 'd392a333d6b4af0bb009cc9124d74cf6a9c28e4a', tag: "p", variant: "fs-12" }, this.text)));
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
