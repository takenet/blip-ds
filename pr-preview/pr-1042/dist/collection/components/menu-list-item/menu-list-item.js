import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '89bd5652a5ea86493c63676b77b40b4472edf8b5', role: "button" }, h("div", { key: 'cb391b403ffefceb5d20f6abb213c637bfe5ac83', class: "menu-list-item" }, h("bds-icon", { key: 'd1ff9e0a0f7ee5f5e5c0845f54296038d1fbc30c', color: color, name: this.icon }), h("bds-typo", { key: 'd46a804c62862cba2cb0fa498c581d3fa62a069d', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'd0d75141341779cabe9eb56f57a66382f69a689d' })))));
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
