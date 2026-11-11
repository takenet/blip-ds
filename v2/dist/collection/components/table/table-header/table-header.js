import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableHeader {
    render() {
        return (h(Host, { key: 'd4dbac769d55a8847d4f451fef58b253fccb9c9a' }, h("slot", { key: '20beb49b1ba78ddf52b408b39cd6824e81ef5d31' })));
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
