import { Host, h } from "@stencil/core";
/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableHeader {
    render() {
        return (h(Host, { key: 'ecfb821ea262d2c94abe5780290bd248614cd020', role: "rowgroup" }, h("slot", { key: 'a5ce57a47e54ac22758c7a082f8d44dd344221d8' })));
    }
    static get is() { return "uai-table-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table-header.css"]
        };
    }
}
