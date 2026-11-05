import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table with UaiThemeProvider for tokenized styling and table semantics.
 */
export class Table {
    render() {
        return (h(Host, { key: 'c30d889630efce18b61f9a50585b8a17c09d85cc', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '25c3dec6e51bee0b0f6e35b2ae6832814c03f61f', class: "bds-table" }, h("slot", { key: '58307d2094519031b9a7a51792c82c934df56327' }))));
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
