import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '8723ebd242ac0004968f71c140285cfca5418ed7' }, h("slot", { key: 'b5bdcbe2fdc1ed6a722bc30970973dc6758a3991' })));
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
