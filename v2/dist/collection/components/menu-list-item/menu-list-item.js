import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '467724d1e1eb9c23f2ad6d9371e5d95470eb4890', role: "button" }, h("div", { key: '836f230fbb107f9fa8aba854b4146184353ef4b9', class: "menu-list-item" }, h("bds-icon", { key: 'f42b03ade012b78b58d6faa931c6936945c84c45', color: color, name: this.icon }), h("bds-typo", { key: '28087f377a45f89ff3f9547d70439283b092f81a', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'b70c398f9324314b6f3c0c9a23b4a9110545ec35' })))));
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
