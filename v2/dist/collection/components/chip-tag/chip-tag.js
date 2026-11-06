import { Host, h } from "@stencil/core";
/**
 * @deprecated Use uai-chip-tag with UaiThemeProvider for tokenized styling.
 */
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
        return (h(Host, { key: 'b8c5c9dbe90aba2964c68356839c78c309d4a1ca' }, h("div", { key: 'd15754ad55416cac647433060caf513e257ac966', class: {
                chip_tag: true,
                [`chip_tag--${this.color}`]: true,
            }, "data-test": this.dataTest }, this.icon && (h("div", { key: 'dc570cf1e3da9ec9d277ddf6a85044880b902e8d', class: "chip_tag--icon" }, h("bds-icon", { key: '4bdaef69560630cae690f5c2cf47bc486780e501', size: "x-small", name: this.icon }))), h("div", { key: '0498db13a8f781d05507bbc6dc015817ec01a12c', class: this.icon ? `chip_tag--container-text--half` : `chip_tag--container-text--full` }, h("bds-typo", { key: '53686e1531f0a7922f68a86b8cbc5d4b7077518b', "no-wrap": "true", class: "chip_tag--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '78ed8b04029f66a348e0aa4948fc0b31d216bc02' }))))));
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
                "reflect": false,
                "attribute": "icon"
            },
            "color": {
                "type": "string",
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
                "attribute": "color",
                "defaultValue": "'default'"
            },
            "dataTest": {
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
}
