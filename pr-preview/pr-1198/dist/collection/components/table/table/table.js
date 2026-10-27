import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: 'a6bdf8d78c5dc8e182bcfca2d4ab0c439ea8f476', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '3401754fe3ea434c0562eebecc75882fe86baebf', class: "bds-table" }, h("slot", { key: '029461b3c43c967db0aaf65f4aa2cd85f0345e5a' }))));
    }
    static get is() { return "bds-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table.css"]
        };
    }
    static get properties() {
        return {
            "scrollable": {
                "type": "boolean",
                "attribute": "scrollable",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies whether the table is scrollable or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "collapse": {
                "type": "boolean",
                "attribute": "collapse",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Specifies whether the table is scrollable or not."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            },
            "denseTable": {
                "type": "boolean",
                "attribute": "dense-table",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Determines if the table has a higher content density, typically resulting in more compact rows and cells."
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=table.js.map
