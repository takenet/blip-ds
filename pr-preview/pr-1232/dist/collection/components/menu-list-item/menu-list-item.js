import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '89839b5e2bcd1c3114e056754373d7ddd6db7a1a', role: "button" }, h("div", { key: '71e20514d940a09a791f3907bf8e4233f61ed761', class: "menu-list-item" }, h("bds-icon", { key: '463aad068cd4e9b7e2edf95b6d2f656db302e657', color: color, name: this.icon }), h("bds-typo", { key: 'de97c9f1f3883ae7f9f3185193de941f9df57e7f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '8106208abbb7d448e06c3589b7ec79555af8d398' })))));
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
