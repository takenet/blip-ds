import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '342d617aa88a33898cb308b543a99044998a431e' }, h("slot", { key: 'f1872c9b3551903f7181dda66bfcbe7f1dbd7a65' })));
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
