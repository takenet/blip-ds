import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '9c87afb0c94c40f0db62554c06c4ee6c21bf1adf', role: "button" }, h("div", { key: '9b54d2757fbcd4bb0cb949d8d83770304bc8240e', class: "menu-list-item" }, h("bds-icon", { key: 'fb83b84e9b72b5ef22b8ca48ebf295b73e1eaff7', color: color, name: this.icon }), h("bds-typo", { key: 'fc0e6a9e1aac0f8d4c0288f7267c553081196124', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'd991f19312b4295efa17a34cd926d6c88ea6cfca' })))));
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
