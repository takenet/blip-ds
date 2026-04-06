import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'c489ce1407d5e103d342f9183ce0bd5b37748dea', role: "button" }, h("div", { key: 'aed3c0283ffbd53683bc4deccc4a4a3d85dccf06', class: "menu-list-item" }, h("bds-icon", { key: 'd129de43630f4b6705d1517b8f4db32d6f72a290', color: color, name: this.icon }), h("bds-typo", { key: 'c6d61c329c69ae67ec59ada75135d55f5110468f', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '0680cb8ee9ee5189cc09e298c36bcceecab005ba' })))));
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
