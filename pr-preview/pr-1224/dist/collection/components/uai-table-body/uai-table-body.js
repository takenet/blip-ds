import { Host, h } from "@stencil/core";
/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableBody {
    render() {
        return (h(Host, { key: '4b98f8a759909077efeba4e8c9e74dfecfb598fc', role: "rowgroup" }, h("slot", { key: 'b605874969a19592c22a05be099a2ca9b6326302' })));
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
