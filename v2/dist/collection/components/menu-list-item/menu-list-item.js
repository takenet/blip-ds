import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '8e74d107833cc209ee83fc469864185ae7123e5d', role: "button" }, h("div", { key: 'cc401ddad8381e4a43418f15ac1954104409af22', class: "menu-list-item" }, h("bds-icon", { key: '4e233e74b2ff20605a02a21ad3337c263090fd5e', color: color, name: this.icon }), h("bds-typo", { key: 'aa350349be57498c95e32ce34c03411ff50fb899', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '279ea21f777cc4bd4109b1e308edebec722aa690' })))));
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
