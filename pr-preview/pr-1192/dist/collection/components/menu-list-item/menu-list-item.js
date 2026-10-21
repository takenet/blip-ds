import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'f3cf6b5dadcd1c750867d2fad8043d2c655910cf', role: "button" }, h("div", { key: 'b4505aab02a21e2c01f43501b7aa39d3c3e44633', class: "menu-list-item" }, h("bds-icon", { key: 'becd0a43cd63dd8c355401661de8c7957f447dfa', color: color, name: this.icon }), h("bds-typo", { key: '7d70e956f9d2ec1e87ad5d22a925d3088b2ba4f5', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '4775ba9625b2fcf7c578684de684ab08c88c199d' })))));
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
