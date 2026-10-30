import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: 'b9004081729a361abf5165aa716ad05eaaee113c' }, h("slot", { key: '1cbbb403a306f11d89d2e38f7f13cd279305d2d2' })));
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
