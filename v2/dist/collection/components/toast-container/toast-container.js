import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'ecb634f3456bc9e41643fe2aa9e46de5908925a9' }, h("slot", { key: 'f886b575b394f10214a05f8260765b8867846cb3' })));
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
