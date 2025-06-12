import { Host, h } from "@stencil/core";
export class ChipTag {
    constructor() {
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '0f5a04b5c3938eb5a4eda5e82d95bf627813cd22' }, h("div", { key: '568966ffe94ac53a3877b9948bc7519e8eec8765', class: {
                chip_tag: true,
                [`chip_tag--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.icon && (h("div", { key: '223d5c5caae147ebb6efbd4e8284bba33b65db0f', class: "chip_tag--icon" }, h("bds-icon", { key: '1582b675e0433665f87116be02f353da0a6c4be0', size: "x-small", name: this.icon }))), h("div", { key: '897273edaf5d01438fcf2511d3ad2f4858830c83', class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { key: '50317d92cc25024cf64761c41028d09ee165bc0b', "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", { key: 'deae1cb1cc8661e154e488f87df9c815479f18b8' }))))));
    }
    static get is() { return "bds-chip-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-tag.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add icon in left container. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "ColorChipTag",
                    "resolved": "\"danger\" | \"default\" | \"disabled\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
                    "references": {
                        "ColorChipTag": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip-tag/chip-tag.tsx",
                            "id": "src/components/chip-tag/chip-tag.tsx::ColorChipTag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used for change the color. Uses one of them."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
}
//# sourceMappingURL=chip-tag.js.map
