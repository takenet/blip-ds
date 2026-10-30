import { Host, h } from "@stencil/core";
export class ExpansionPanelHeader {
    render() {
        return (h(Host, { key: '340e1241125bd3a566072f75992cae6767e6dd27' }, h("div", { key: '570176a0764fd0ee55927ee74d8112d66d7eee39', class: "header" }, h("slot", { key: '2608f50525ce028d4720de9c4973dd1863f5f2cb' })), h("bds-typo", { key: '877c733a572db0f43e18ca828363b058aee21f18', tag: "p", variant: "fs-12" }, this.text)));
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
