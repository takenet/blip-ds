import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'e5f3b1e471a565041d282b48ed61c4f205046c44', role: "button" }, h("div", { key: '6ce9a15560a34ab7f4964575a42c6c56e6232c16', class: "menu-list-item" }, h("bds-icon", { key: '72a708a30087470f801584a7eb5c55c67c8187fa', color: color, name: this.icon }), h("bds-typo", { key: '00907cdd7b8fe7fd8c845cbda644ba08ad3405f8', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '4a7b3a4dc910d0c6086b603a3e07d28765913264' })))));
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
