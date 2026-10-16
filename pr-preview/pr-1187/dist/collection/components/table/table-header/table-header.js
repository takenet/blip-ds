import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '0d9f9d4edd7a5bcc9841762b88d90db8e97bd1ea' }, h("slot", { key: '1bc9ca332c14b831b7a4ab96249436dad9acc6a6' })));
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
