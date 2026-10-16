import { h, Host } from "@stencil/core";
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
        return h(Host, { key: '308fc20da6c74c8808a4eca46cc3768985a73419' }, this.renderContent());
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
                "attribute": "type",
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
                "defaultValue": "'text'"
            },
            "sortable": {
                "type": "boolean",
                "attribute": "sortable",
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
                "defaultValue": "false"
            },
            "justifyContent": {
                "type": "string",
                "attribute": "justify-content",
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
//# sourceMappingURL=table-cell.js.map
