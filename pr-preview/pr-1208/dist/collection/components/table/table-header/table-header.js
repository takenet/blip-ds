import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '4a7d6b430cb9f45fc4f44542f297f27db41088f5' }, h("slot", { key: 'adb1f62dfd906403f320f8f031c8de5281f1502a' })));
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
