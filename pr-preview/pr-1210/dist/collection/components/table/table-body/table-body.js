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
        return (h(Host, { key: 'ef470125c4c96c733a2d000e60b32c638a9054f9', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '401f22f538bbf68f0fb8d8564d5f3e1c145bf40b' })));
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
