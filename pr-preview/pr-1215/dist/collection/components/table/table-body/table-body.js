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
        return (h(Host, { key: '414cb7c454a473122a1fab36f391156454893b74', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: 'a831e233299374161ac032230079d5dbfe2985ed' })));
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
