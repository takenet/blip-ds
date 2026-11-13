import { Host, h } from "@stencil/core";
/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableHeader {
    render() {
        return (h(Host, { key: '1ea3dd98eb545e3a3b571e0e01be3586952f2645', role: "rowgroup" }, h("slot", { key: '7a5aa11962413db19777df2274eafd2894265556' })));
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
