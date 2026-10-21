import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: '7db122bc55977382759f950a6ffb9c233a327597', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '0e4fa1f477a431b8a2717aa6637ffe6241f83b45', class: "bds-table" }, h("slot", { key: 'e736bed3c66c19d6ddfbdec34770aabda7ec541f' }))));
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
