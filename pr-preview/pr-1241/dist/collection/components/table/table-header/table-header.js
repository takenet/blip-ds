import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableHeader {
    render() {
        return (h(Host, { key: '8ffba43363ebd9b8749cd61a95b70f8141c20114' }, h("slot", { key: 'd8afd4df1616b0f0c9f37cf37aecb48d1213f84f' })));
    }
    static get is() { return "bds-table-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-header.css"]
        };
    }
}
