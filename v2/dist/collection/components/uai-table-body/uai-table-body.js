import { Host, h } from "@stencil/core";
/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableBody {
    render() {
        return (h(Host, { key: '6ee670068e5ff71017ce17f87269c33231a66707', role: "rowgroup" }, h("slot", { key: 'b80013ae67b61e8e63cf06b6109e606e214798dd' })));
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
