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
        return (h("div", { key: 'a4167ccf8a074644b3dc13107974763833c53f16', class: {
                menuseparation: true,
                [`menuseparation__${this.size}`]: true,
            } }, this.value && (h("bds-typo", { key: '5f7c3155984755de0d5ed0ebfb6bcb4bd5a9daf7', class: "title-item", variant: "fs-10", tag: "span" }, this.value)), h("div", { key: '4d4a65c51fb4941db48324d7021e1fc220a81914', class: "dividor-item" })));
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
                "attribute": "value",
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
                "defaultValue": "null"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=menu-separation.js.map
