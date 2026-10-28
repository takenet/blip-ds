import { h, Host } from "@stencil/core";
export class TableHeader {
    render() {
        return (h(Host, { key: '91ffdca7e75f5d5687bcc545b83e62028530f238' }, h("slot", { key: '9dc7e3c96b42659514be7227f04fb8f65d609fc7' })));
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
