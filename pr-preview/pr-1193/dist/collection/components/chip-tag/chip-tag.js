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
        return (h(Host, { key: '887254e094eb8da629197db22d1cf745d36c44eb' }, h("div", { key: '184c6b4bbe90f3c4db18c1f15fd7a4b5e103f423', class: {
                chip_tag: true,
                [`chip_tag--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.icon && (h("div", { key: '12c1fab15b6a7a95a34820c4300591976335230e', class: "chip_tag--icon" }, h("bds-icon", { key: 'bc21e95c84cff8a0a648be069ee7c9c438c00f60', size: "x-small", name: this.icon }))), h("div", { key: 'a7aa8eac28bf01ab0d09ee995a0cd87fb6bc2ac1', class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { key: '8782a444b3c56871c5001404f2fb8d966b9bffaa', "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '058c4a53484962e98402be0db41bb0462afaa336' }))))));
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
