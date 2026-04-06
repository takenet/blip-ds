import { h, Host } from "@stencil/core";
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
        return (h(Host, { key: 'e6113fa0dff53f53b34d47ac6d77f2ccbd39ba23', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '48ac1586bb5c488b72ea47d8204bf68072a9d1b7' })));
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
//# sourceMappingURL=table-body.js.map
