import { h } from "@stencil/core";
export class BdsMenuSeparation {
    constructor() {
        /**
         * Value. Used to insert a title to the divider.
         */
        this.value = null;
        /**
         * Size. Used to set the size of the divider.
         */
        this.size = null;
    }
    render() {
        return (h("div", { key: '43c28465d8978e23a5a0317a113cd591ad9481e6', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: 'd44a6024929d7189ee4ab4d5b0d49f980fe66db4', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '8405e1473f13e057a8930df0c44fc317cf11d47e', class: "dividor-item" })));
    }
    static get is() { return "bds-menu-separation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-separation.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-separation.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Value. Used to insert a title to the divider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "null"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Used to set the size of the divider."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "null"
            }
        };
    }
}
