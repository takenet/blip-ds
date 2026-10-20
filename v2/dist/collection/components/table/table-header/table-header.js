import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '98edcf19d2698a1d43394489c94a5e82c7ed05ee' }, h("slot", { key: '6f283ca834790a2c0f73b5c92cce0511dbc65dc9' })));
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
//# sourceMappingURL=table-header.js.map
