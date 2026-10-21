import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '8ebab52369d70d5c5be077fdf35f46a49bb6748d' }, h("slot", { key: '297bef0fa24d0a2e7c614f5d0ee5db188c7ec7c2' })));
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
