import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '83f1fb76ff973fb12d820e3a80d178749c85fe2e' }, h("slot", { key: 'd12cd89d2a1ef6ca8a36fe2a2dd2186fa0738864' })));
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
