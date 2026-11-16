import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table with UaiThemeProvider for tokenized styling and table semantics.
 */
export class Table {
    render() {
        return (h(Host, { key: 'f920891c5b5a65fb3d408a3e265bc23bde7e7545', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'dff6bf84c5857d9cffeae3b45d66d49ebc57aa52', class: "bds-table" }, h("slot", { key: 'e6bc5094008c149e15bb4004161f6f0e2b86213a' }))));
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
                "reflect": true,
                "attribute": "scrollable"
            },
            "collapse": {
                "type": "boolean",
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
                "reflect": true,
                "attribute": "collapse"
            },
            "denseTable": {
                "type": "boolean",
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
                "reflect": true,
                "attribute": "dense-table"
            }
        };
    }
}
