import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'af81784b09d5c1f7917108451a6993264ea38f80' }, h("slot", { key: 'c0a573e2ed3ff96e3d69c86fe6a33a155f0d1b0f' })));
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
