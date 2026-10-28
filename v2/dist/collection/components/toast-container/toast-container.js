import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'c201a9c23cd7b2ab7d58907cde991f71bab18db2' }, h("slot", { key: 'de9214404c464946e66fe6f257d033591d24638a' })));
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
