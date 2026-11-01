import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'd9275d4c9c8fc20a788c94d6132bec321b479e48', role: "button" }, h("div", { key: '4949bf161a872df77cde5068ea64ea8dfcc3b46f', class: "menu-list-item" }, h("bds-icon", { key: '9897657eec20cc6fc6a1798d11ff7b87b7f7b785', color: color, name: this.icon }), h("bds-typo", { key: 'a6021e2570680f24d539ebac2576d504deb598d5', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '43ac7e8e82418a06ca7b99b0b2ee3c8f930b5492' })))));
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
