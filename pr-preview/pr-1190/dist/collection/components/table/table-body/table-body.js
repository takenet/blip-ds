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
        return (h(Host, { key: '6fd4435dd90fba8dbdf3ec4cf22b128a27869818', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '3b8c873e9c861b5e6b39b46f8f9097d342d2681d' })));
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
