import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table with UaiThemeProvider for tokenized styling and table semantics.
 */
export class Table {
    render() {
        return (h(Host, { key: '1b8d11343fde82544f6e8f4991e53fd1b1d3e99d', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'e90f92b02dfd649fc6b92ef3cd386ef28fe9de43', class: "bds-table" }, h("slot", { key: '02175c963884b8a531a8336ab50578f45fda839d' }))));
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
