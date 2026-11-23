import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableHeader {
    render() {
        return (h(Host, { key: '2a6feaaa11c6419bf98c8537646c98496af8d919' }, h("slot", { key: 'fbbbb2111bffcb045031fb0aaefe38b24fd43e3a' })));
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
