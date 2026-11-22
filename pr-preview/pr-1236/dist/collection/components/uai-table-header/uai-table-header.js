import { Host, h } from "@stencil/core";
/**
 * Table header group. Use it inside UaiTable; pair with UaiTableRow; avoid placing other content here.
 *
 * @slot - UaiTableRow elements.
 */
export class UaiTableHeader {
    render() {
        return (h(Host, { key: '0d09f2c6e5ff1eaa4ef7fbf56ad86d4f5004b0df', role: "rowgroup" }, h("slot", { key: 'e32d6de0e9d5d07ee02f5d72357761aed636d090' })));
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
