import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table with UaiThemeProvider for tokenized styling and table semantics.
 */
export class Table {
    render() {
        return (h(Host, { key: 'adb3316912b503fed2d392ef3cdff98e8d63010c', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'c8841ff2a34e7b7d169595b68bb057d52ed15093', class: "bds-table" }, h("slot", { key: 'e2b8e4f2ae6e44c90d044a5b4301734048df96a8' }))));
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
