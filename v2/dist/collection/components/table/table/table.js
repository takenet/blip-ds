import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: '0a1f1bcac66ff041c740cbbe666938e553532b62', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '459e32cafa8301a63e4baa5d9f2e11f8bce6e994', class: "bds-table" }, h("slot", { key: 'a4003fa46489078c3242ad785badfb0e9338a4b9' }))));
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
