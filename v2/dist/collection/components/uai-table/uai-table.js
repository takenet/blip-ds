import { Host, h } from "@stencil/core";
/**
 * Container of a data table. Use it with UaiTableHeader, UaiTableBody, UaiTableRow, UaiTableTh and UaiTableCell;
 * pair with UaiThemeProvider and compose selection controls inside the cells; avoid using it for page layout.
 *
 * @slot - UaiTableHeader and UaiTableBody.
 */
export class UaiTable {
    constructor() {
        /** Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as "auto repeat(4, 1fr) auto"; avoid sizing cells one by one. */
        this.columns = null;
        /** Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names. */
        this.label = null;
    }
    render() {
        return (h(Host, { key: '92653ba9b4f977be2acb6f084060e2c0529382a8', role: "table", "aria-label": this.label, style: this.columns ? { '--uai-table-columns': this.columns } : undefined }, h("slot", { key: '98a5ad568c1b0ae238f7d4b8d310b73211abf662' })));
    }
    static get is() { return "uai-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table.css"]
        };
    }
    static get properties() {
        return {
            "columns": {
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
                    "text": "Column widths as a CSS grid-template-columns value, shared by every row. Use to align header and rows, such as \"auto repeat(4, 1fr) auto\"; avoid sizing cells one by one."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "columns",
                "defaultValue": "null"
            },
            "label": {
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
                    "text": "Accessible name of the table. Use a short description of the data; pair with a visible title; avoid repeating the column names."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "null"
            }
        };
    }
    static get elementRef() { return "el"; }
}
