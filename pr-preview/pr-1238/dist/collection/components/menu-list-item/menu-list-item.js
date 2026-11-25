import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '7c2980342f599e2f8efc893144229995c1426807', role: "button" }, h("div", { key: '979e77e9ff8a82f703294792c890519d13b38396', class: "menu-list-item" }, h("bds-icon", { key: '6b2a2ef46a5e2068644d0f635f159baa0933db69', color: color, name: this.icon }), h("bds-typo", { key: '86c93466bae760c08098ebfbf97eedcd7a22cbe0', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b87d2112f3001f3afa5fe6655762dd16b4b5a71d' })))));
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
