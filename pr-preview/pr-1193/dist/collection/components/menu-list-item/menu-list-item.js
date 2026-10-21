import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'ac585839db83aef66c1b2064a588bff727c1a457', role: "button" }, h("div", { key: '2c39adac9b30a918e4f71d47671dd58a0f4a4173', class: "menu-list-item" }, h("bds-icon", { key: '39c95609a91cf9f1f5b4ae59bc6bdbb9fed7ac3c', color: color, name: this.icon }), h("bds-typo", { key: '273d4dbb180d737eada03851a9142cac9cc2b3b6', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '7dd77006f2f882eecb60bbf0e9b0e5fc7f68a9af' })))));
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
                "attribute": "color",
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
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=menu-list-item.js.map
