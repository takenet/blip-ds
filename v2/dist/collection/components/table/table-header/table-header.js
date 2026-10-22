import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '196da6466b8dd62a635289cfc79758ecb2153e8e' }, h("slot", { key: '72f704567601e155c2ab4888f1c25c3ab6e17089' })));
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
