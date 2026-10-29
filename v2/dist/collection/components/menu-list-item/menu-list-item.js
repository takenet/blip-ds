import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'e86bb93f8ed6f57638eafb346aa9734eb27e678e', role: "button" }, h("div", { key: '95afd5c7ae0dad9592b315ca34d8d53ef825a682', class: "menu-list-item" }, h("bds-icon", { key: '576557f9bf8dba021555f570921ef4fd9dd35160', color: color, name: this.icon }), h("bds-typo", { key: 'c01edd5b802ee87c624a3a3832991ef0b1fcd693', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'a1666bb85b26876b4b64889ec6fb7caf1f919358' })))));
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
