import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '2474aef855fd26c9a003e14df5aadcbb69d06b5a', role: "button" }, h("div", { key: 'e61cb9e9136e3f0f73d4733691d1af859e32ebcd', class: "menu-list-item" }, h("bds-icon", { key: 'e9a10e9808986b3656ed4e742be1376d57eb4c5f', color: color, name: this.icon }), h("bds-typo", { key: '53f6769df9c4bee929c3cd02418d45be943692e3', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '18bb72dc0dd62ba09df1466d620fb87c689efd3b' })))));
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
