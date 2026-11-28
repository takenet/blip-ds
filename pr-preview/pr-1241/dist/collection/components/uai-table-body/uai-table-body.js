import { Host, h } from "@stencil/core";
/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableBody {
    render() {
        return (h(Host, { key: '08ca06f99136962f672890325454e65c4f56a056', role: "rowgroup" }, h("slot", { key: '508a8989c4978b58fc100ed412e0727e592295b2' })));
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
