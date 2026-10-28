import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '6912979cbae55369fa16a5d3f6cb12cc2802d340' }, h("slot", { key: '335b48a7fcf93044973b02b3d033b2347a62330d' })));
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
