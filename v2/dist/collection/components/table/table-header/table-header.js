import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableHeader {
    render() {
        return (h(Host, { key: 'e079ee6eb124c68c4fed8d991be80c61e80f73cd' }, h("slot", { key: '78f851515a1fc1de5919e2e4155cadfca420575e' })));
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
