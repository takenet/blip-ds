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
        return (h(Host, { key: 'ac46e9d6749ae949eeb8d0f72b7c745db6694f1c', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '4730e6cd9fdc72de21667c71217383ede8053431' })));
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
