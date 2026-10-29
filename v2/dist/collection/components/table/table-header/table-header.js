import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '6b98ca7d42ace8cbcd6f8482de2f6b0b27e36944' }, h("slot", { key: '4b8890b910b1afc763f85c0ba931a325f6bf9a54' })));
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
