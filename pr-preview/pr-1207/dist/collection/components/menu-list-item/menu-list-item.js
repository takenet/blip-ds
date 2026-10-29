import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '837c7853e924d23ad93ffb9cd9454c4468df1988', role: "button" }, h("div", { key: '048323d1d62abbcd529fd2019b88c376010bba4a', class: "menu-list-item" }, h("bds-icon", { key: '1c9213453d9013ccd9b14cc107b30e51b5ff844e', color: color, name: this.icon }), h("bds-typo", { key: '58893ef28c9ef3566fcaefeb8e8393964d4f747e', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'ca09f16a9b009b448c1eaca9d3b1ecfd8d743961' })))));
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
