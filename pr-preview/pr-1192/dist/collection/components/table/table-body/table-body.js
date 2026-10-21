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
        return (h(Host, { key: '0e7147000a811ebb20f03dce729bcd01cc39f45c', class: { host: true, multiple: this.multipleRows } }, h("slot", { key: '2d47f3227dbaa62a2a266fc761b7b1bc8951eb63' })));
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
