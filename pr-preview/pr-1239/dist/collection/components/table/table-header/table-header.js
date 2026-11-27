import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-header with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableHeader {
    render() {
        return (h(Host, { key: '9271eff2d2d280532e64eadf6c2543b880c8daa6' }, h("slot", { key: 'd0bf33e3fcc6ffdb4b0f2897c69b2c939756ea57' })));
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
