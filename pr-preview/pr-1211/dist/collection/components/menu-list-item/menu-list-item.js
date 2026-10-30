import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'b52d026f5f4d77e9a0644d3122c4d166b08bee11', role: "button" }, h("div", { key: '3e11c2f1dcfd951a1d79c0a17ffec4e8a01db086', class: "menu-list-item" }, h("bds-icon", { key: '0bd6394932211164856e41882bf224b008557fea', color: color, name: this.icon }), h("bds-typo", { key: 'faaaeec58b70bd0683fa8c50b1fdd0f617b812f1', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'a86dd2d13e6c838c0c23f35cdfa3c627e58144e4' })))));
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
