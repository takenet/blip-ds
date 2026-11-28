import { Host, h } from "@stencil/core";
/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableBody {
    render() {
        return (h(Host, { key: '91823043f660b5d2d54bbdcfbfc03c6e59b0c738', role: "rowgroup" }, h("slot", { key: 'd3b25723ad128eafc808c1643ed759dc50f6c27a' })));
    }
    static get is() { return "uai-table-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-table-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-table-body.css"]
        };
    }
}
