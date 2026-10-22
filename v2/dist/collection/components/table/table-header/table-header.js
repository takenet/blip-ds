import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '1e60f1072a4742046bf3a427138a03c5bdb3fc5d' }, h("slot", { key: 'b0daae57b5a66f40c317a8afecfc0f377a76bdfa' })));
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
