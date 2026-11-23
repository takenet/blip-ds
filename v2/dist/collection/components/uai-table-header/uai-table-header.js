import { Host, h } from "@stencil/core";
/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableHeader {
    render() {
        return (h(Host, { key: '70382bc57d34600c3dd71b64b722570a41943547', role: "rowgroup" }, h("slot", { key: '9789fcc4df7e059df718faa6bb80b21d59aee751' })));
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
