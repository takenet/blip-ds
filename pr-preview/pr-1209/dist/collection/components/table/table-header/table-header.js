import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: 'ba34df2bc454317c8a29badaf4818143cae53f33' }, h("slot", { key: '9b46751927984075ced46acb0f39f9f736c27cf0' })));
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
