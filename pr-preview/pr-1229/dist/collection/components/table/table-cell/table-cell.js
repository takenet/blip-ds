import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-cell with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableCell {
    constructor() {
        this.isDense = false;
        this.type = 'text';
        this.sortable = false;
        this.justifyContent = 'left';
    }
    renderContent() {
        return this.type === 'custom' ? (h("div", { class: { cell: true, cell_custom: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'text' ? (h("div", { class: { cell: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("bds-typo", { variant: "fs-14", bold: this.sortable ? 'bold' : 'regular' }, h("slot", null)))) : this.type === 'action' ? (h("div", { class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : this.type === 'collapse' ? (h("td", { colSpan: 2, class: { cell: true, cell_action: true, dense_cell: true, [`justify--${this.justifyContent}`]: true } }, h("slot", null))) : (h("slot", null));
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && bdsTable.getAttribute('dense-table') === 'true') {
            this.isDense = true;
        }
    }
    render() {
        return h(Host, { key: '4f8eaa8eb0744b7a1ee01ff12bc2bd9f6ed7a04d' }, this.renderContent());
    }
    static get is() { return "bds-table-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-cell.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-cell.css"]
        };
    }
    static get properties() {
        return {
            "type": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'text'"
            },
            "sortable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sortable",
                "defaultValue": "false"
            },
            "justifyContent": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "JustifyContent",
                    "resolved": "\"center\" | \"left\" | \"right\"",
                    "references": {
                        "JustifyContent": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/table/table-cell/table-cell.tsx",
                            "id": "src/components/table/table-cell/table-cell.tsx::JustifyContent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "justify-content",
                "defaultValue": "'left'"
            }
        };
    }
    static get states() {
        return {
            "isDense": {}
        };
    }
    static get elementRef() { return "element"; }
}
