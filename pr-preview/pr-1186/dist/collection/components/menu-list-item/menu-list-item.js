import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'a0be5716c5f642ca3f01cf092273a3c387364251', role: "button" }, h("div", { key: 'e056ddf9e4c9ef5bbc6761894edad231bf55f5a8', class: "menu-list-item" }, h("bds-icon", { key: 'd6e5e464ef24f42fd2637aa29a050ddfd72076b0', color: color, name: this.icon }), h("bds-typo", { key: 'ec6f4d1ad1d53420beee57a606404b7acad148ca', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '428f59f610069ce92241c4a8d0427ba59827c224' })))));
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
