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
        return (h(Host, { key: '400660cfbfb623a52dfdbb5663dc8c6716b03f34', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '5f26b08080e12ebce1c48fdde8cc47abd2a8264e' })));
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
