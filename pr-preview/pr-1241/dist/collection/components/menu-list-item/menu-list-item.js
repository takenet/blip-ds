import { Host, h } from "@stencil/core";
export class MenuListItem {
    render() {
        const color = this.color || 'currentColor';
        return (h(Host, { key: '4742b2f65d18a025e27ca2bee56c56ccd07785b4', role: "button" }, h("div", { key: 'f0b1eb66245397fd266c75e448c4cfb2d733c9b1', class: "menu-list-item" }, h("bds-icon", { key: 'c97e2bc8c438646b8e1d4ab3fa2045cd4e75855f', color: color, name: this.icon }), h("bds-typo", { key: 'ef9db54119d7586c5c4263966c700a3214d515df', class: "menu-list-item__text", variant: "fs-10" }, h("slot", { key: '79d5b6e9905cbb4ac97e1d2eed17150c943225c9' })))));
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
