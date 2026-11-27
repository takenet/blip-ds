import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'c84858c14862d8951329359f9f1ffa7034e1083d', role: "button" }, h("div", { key: '24b674bb21f59b97e27b463f40494a8e59690fe6', class: "menu-list-item" }, h("bds-icon", { key: 'e2368a45226d1911fe1af8df1b4af259e0426f7e', color: color, name: this.icon }), h("bds-typo", { key: '46ac420c21f4e42efc00a3efb164b1445e8e0159', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '9f0963e67e258e8b994b231a551d7b948920b384' })))));
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
