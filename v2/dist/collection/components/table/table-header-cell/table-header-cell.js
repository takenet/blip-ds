import { h, Host } from "@stencil/core";
export class TableHeaderCell {
    constructor() {
        this.isDense = false;
        this.sortable = false;
        this.arrow = '';
        this.justifyContent = 'left';
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('dense-table') === 'true' || bdsTable.denseTable === true)) {
            this.isDense = true;
        }
    }
    render() {
        return (h(Host, { key: 'a286b5a66d8d1e4dd575078f8fcdc83af79ab7f1' }, h("div", { key: 'c6119fde2c112323965af9699cbeca148395b48a', class: {
                th_cell: true,
                [`th_cell--sortable-${this.sortable}`]: true,
                'dense-th': this.isDense,
                [`justify--${this.justifyContent}`]: true
            } }, h("bds-typo", { key: '4bc06f86385f02e753ee782ed26e7e41757e52ec', bold: this.sortable ? 'bold' : 'semi-bold', variant: "fs-14" }, h("slot", { key: 'd29b72133c440bbf490de15901ded6b78b7aad09' })), this.sortable ? (h("bds-icon", { size: "small", name: this.arrow === 'asc' ? 'arrow-down' : this.arrow === 'dsc' ? 'arrow-up' : '' })) : ''
        // <div style={{ width: '20px' }}></div>
        )));
    }
    static get is() { return "bds-table-th"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-header-cell.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-header-cell.css"]
        };
    }
    static get properties() {
        return {
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
            "arrow": {
                "type": "string",
                "attribute": "arrow",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "''"
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
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/table/table-header-cell/table-header-cell.tsx",
                            "id": "src/components/table/table-header-cell/table-header-cell.tsx::JustifyContent"
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
//# sourceMappingURL=table-header-cell.js.map
