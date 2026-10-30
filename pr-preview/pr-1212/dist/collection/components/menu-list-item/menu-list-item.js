import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'bfba6d0a27ae3d377d219915a42635a0a6dec4dd', role: "button" }, h("div", { key: 'a4dc63537aea408326ea57155571fb467b478758', class: "menu-list-item" }, h("bds-icon", { key: '0bcaca5157f068e4a607d617b09534b66bc109f9', color: color, name: this.icon }), h("bds-typo", { key: 'fb9f3ac1f23c6b7c35e894eb89aac65355108a8f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '9c549e4430fc662f571fad9e71ebb434399e1404' })))));
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
