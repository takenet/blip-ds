import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '9cdb496516bf6093eee981f65de2b95a5249a8b9', role: "button" }, h("div", { key: 'f7873e47f35cbd38e5ce2d2b9068c5565baf9fed', class: "menu-list-item" }, h("bds-icon", { key: 'fb16db6d045d5a9588b69a28515465446678a04d', color: color, name: this.icon }), h("bds-typo", { key: '07933a0d9a87f44761cc6e87120c91da34706559', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '1aa07f62d1b15245d2265060e02bd1b03351faab' })))));
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
