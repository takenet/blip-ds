import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'dc0d07287b8e43880e58e76be69e3ef79a598297', role: "button" }, h("div", { key: 'a1742fd9c066822a9b0ae8ce135444e77dc2f9b8', class: "menu-list-item" }, h("bds-icon", { key: 'a60dbfd6b2b89a4469d06e2b9da004f2b64f2cac', color: color, name: this.icon }), h("bds-typo", { key: '254d512691337454b781437cc3b4efdc7901a6ce', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'c65ab0f637edad37386018d95e9b55c4d77f3868' })))));
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
