import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '59180ea265372321cc456ef95f02265ce1c35835', role: "button" }, h("div", { key: 'a1230e59376c567c2b2b8880bef2acbf3b0dff08', class: "menu-list-item" }, h("bds-icon", { key: 'aedb371b426fb952a429e309d690e40c78e0634e', color: color, name: this.icon }), h("bds-typo", { key: '8a4fb75ef40bf5ae254879a14234d1b7435916c4', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '871ade3ccecad937c0586b3cbb5812ccf31b42f6' })))));
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
