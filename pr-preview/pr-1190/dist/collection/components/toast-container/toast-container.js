import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'e6db8f555f65022023eb3c740137d3b37448091a' }, h("slot", { key: 'a939272a4b760ce9f5810be1fde85567d56e2caf' })));
    }
    static get is() { return "bds-toast-container"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["toast-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["toast-container.css"]
        };
    }
}
//# sourceMappingURL=toast-container.js.map
