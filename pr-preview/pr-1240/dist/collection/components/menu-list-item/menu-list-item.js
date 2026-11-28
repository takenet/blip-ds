import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '90591e7fdedeaae350b257c3a76e2d58f990edc3', role: "button" }, h("div", { key: '1c2131e0cb348ac43b04a5c3dbb6ebb16d1eaf01', class: "menu-list-item" }, h("bds-icon", { key: 'ce4469c8a77e3a19429297586f7dbc96a8be50f6', color: color, name: this.icon }), h("bds-typo", { key: 'c7945b0193d22cda04c1714ddfa6754afeee1686', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '3de01f893a1d5d4a234602e524ff6a06f563180a' })))));
    }
    static get is() { return "bds-menu-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-list-item.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color"
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon"
            }
        };
    }
}
