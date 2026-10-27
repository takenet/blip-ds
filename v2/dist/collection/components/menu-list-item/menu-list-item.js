import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '2a68cd17db01f60f5e7b75f7aef146386f4f68e6', role: "button" }, h("div", { key: '4d9e10de9ecd3f5d066f52ea79a956972e257577', class: "menu-list-item" }, h("bds-icon", { key: 'd324f4a957598be0b14feaceca4f35f0d42ec09f', color: color, name: this.icon }), h("bds-typo", { key: 'bdeb09c5f1ade0bc50bfb61aa468d0116f52715f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'f8cf62c9bf7da5970b2f6de2182713ea953096c6' })))));
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
