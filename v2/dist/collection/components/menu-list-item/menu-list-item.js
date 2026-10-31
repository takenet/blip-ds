import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'b4216a00dc3610d76d7f099d3b75166716572671', role: "button" }, h("div", { key: '89c9fc706dfd5031f0ac6ee6dfc3b1277bda789b', class: "menu-list-item" }, h("bds-icon", { key: '99887edf112f54e4812683e1e8a31bb34328dcdd', color: color, name: this.icon }), h("bds-typo", { key: '4edea0e3447aa1b476fcb27e99b87d40138d458d', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: 'c6efcd9246a75f9f7cb4acc9327d91bb045a3ca4' })))));
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
