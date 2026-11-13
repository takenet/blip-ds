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
        return (h("div", { key: '342952c593a0033ca79e3de8219ff0f40dfcc230', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '26e879bdbac64f4527202d4cd0fa2c5086fff978', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '9c00b12a67588c3a8450505d1f43ca5849d4c691', class: "dividor-item" })));
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
