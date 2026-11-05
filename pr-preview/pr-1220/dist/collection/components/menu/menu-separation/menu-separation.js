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
        return (h("div", { key: '4eb5228afd53868766b848f960eb4d5d80860515', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '8e6d2fa462b8a8ca690218d6cb155ed1817ce41e', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '63b0b02208ab4d049cd3e93968861fdcdd2498d1', class: "dividor-item" })));
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
