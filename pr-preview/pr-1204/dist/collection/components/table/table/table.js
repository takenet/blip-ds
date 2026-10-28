import { h, Host } from "@stencil/core";
export class Table {
    render() {
        return (h(Host, { key: '2c2915a24ad38ae52379951e4d8a2c29277b432a', class: { scrollable: this.scrollable, 'dense-table': this.denseTable } }, h("div", { key: '0165f59677a6ce26f6cce075ed069f2802421039', class: "bds-table" }, h("slot", { key: 'af03dcb34dd9c7ae65499e36a5f34555b1f95ad4' }))));
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
