import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: 'd351f748fc26b1acbf1c53b21766fb05da5043ec', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: 'bb082078440cae44e2e2064286cbc6f97b225854', class: "bds-table" }, h("slot", { key: '709ed0006d04ee0cd93b8d8d32c03e583ea54b5e' }))));
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
