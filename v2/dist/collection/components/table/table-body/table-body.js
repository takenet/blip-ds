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
        return (h(Host, { key: '3c80d6a167b44e7de8909515e4926b28560419a1', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '8b36af814d7b3aa07a0e16263df8bcc86dbdb591' })));
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
