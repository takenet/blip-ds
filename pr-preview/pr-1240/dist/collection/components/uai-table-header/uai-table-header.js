import { Host, h } from "@stencil/core";
/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableHeader {
    render() {
        return (h(Host, { key: 'c5463b339d27f99b66d9b90395505cf2d5539219', role: "rowgroup" }, h("slot", { key: 'efcb589031f71dd17d8d4ed1b6d7a12db63b472a' })));
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
