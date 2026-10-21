import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: 'fb843c7b9cf35b469ed93895075cfd99da46dea9' }, h("slot", { key: 'ef0683c5a5710b94803f03317445e1959eb739e7' })));
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
