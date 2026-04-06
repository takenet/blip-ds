import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '7b5161825754a09d0ed81913176b57687fbb3e79' }, h("slot", { key: '2e56df889f2dc5557a4c98ba7cc77bdc8548dd3a' })));
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
