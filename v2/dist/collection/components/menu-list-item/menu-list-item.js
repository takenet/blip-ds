import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '9169c4209b5d6a5b314783159f1e5729af4c9a5e', role: "button" }, h("div", { key: '97d3fb474e4995d5bab05c02bb9c2f7542c9068f', class: "menu-list-item" }, h("bds-icon", { key: 'edf653c15c5b76b177decaa614dd59fd4fa4f148', color: color, name: this.icon }), h("bds-typo", { key: '86e9a7ad3a9e0bae1f27a248a17ba93a368a0ba0', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '2b40e1f09b30f52fea5f9c16b10e5c3a28308e71' })))));
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
