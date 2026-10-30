import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '78ece7a4e57c04605a83f41083ed3d6c7a5162a1' }, h("slot", { key: '98bdde11ad322701b1fc7992d3a913ea40c9c8ef' })));
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
