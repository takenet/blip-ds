import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-table-body with UaiThemeProvider for tokenized styling and table semantics.
 */
export class TableBody {
    constructor() {
        this.multipleRows = false;
    }
    componentWillLoad() {
        const bdsTable = this.element.closest('bds-table');
        if (bdsTable && (bdsTable.getAttribute('collapse') === 'true' || bdsTable.collapse === true)) {
            this.multipleRows = true;
        }
    }
    render() {
        return (h(Host, { key: 'aeb0e5c345137978f371baf8d2fe172139e5f7fc', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '203b9e19c7f7966a2e3b7f26eeedb96f922f9325' })));
    }
    static get is() { return "bds-table-body"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-body.css"]
        };
    }
    static get states() {
        return {
            "multipleRows": {}
        };
    }
    static get elementRef() { return "element"; }
}
