import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: 'b58bbb87b5faad8f9effcd1832624b4ace59eee5' }, h("slot", { key: '725fed3292166d90056be2337310c6c8a26e2f33' })));
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
