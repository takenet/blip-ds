import { Host, h } from "@stencil/core";
/**
 * Table body group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableBody {
    render() {
        return (h(Host, { key: '04be00877e365d88c3c7dca849f7b1b329fed455', role: "rowgroup" }, h("slot", { key: '846f2d6cb84bf76e49f1c51851dfe7a441d0b3aa' })));
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
