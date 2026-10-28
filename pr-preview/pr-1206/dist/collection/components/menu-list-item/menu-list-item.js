import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '20308ef78fadbcc46ed0fb9e6492dc1cc2e89cfa', role: "button" }, h("div", { key: '66e332440f1f98653d36b5fc4fa8f20cef2034e5', class: "menu-list-item" }, h("bds-icon", { key: 'f05613f6c6ff29f5b236bb04176df99def4e72da', color: color, name: this.icon }), h("bds-typo", { key: '3cd97f7d2bd1994793df4f6b27c0c8f68edb488b', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b40f25a9aa2c8d7b405790d4d4a36a55029f25fe' })))));
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
