import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: 'bdb0bc901f7a7007c95a086749e39051e62ea899', role: "button" }, h("div", { key: '7d0761f24b2d146d5654ed889b34504dceaee362', class: "menu-list-item" }, h("bds-icon", { key: 'ee8f93fe14fded553d8a14f2ff69108a05f62ac7', color: color, name: this.icon }), h("bds-typo", { key: 'e24931592aa40a162ec834d202e0d57a085a9b25', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '7ad39f92e4a1163714d23de190f224b4a8e1831b' })))));
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
