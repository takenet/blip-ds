import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '1eb9af78fe19e8b3920d07d9379aaeca01357067', role: "button" }, h("div", { key: 'c1ebd14f1def8815eaed348861add97bfbf5cad6', class: "menu-list-item" }, h("bds-icon", { key: 'b843359ee673c3855b4fa2760b8bb166b00dff23', color: color, name: this.icon }), h("bds-typo", { key: '209cb7c3e6131306436affee02b44e0148f2a286', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'c0ec63eb18e8b9e32fd08d53b97ffc66cc05b727' })))));
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
