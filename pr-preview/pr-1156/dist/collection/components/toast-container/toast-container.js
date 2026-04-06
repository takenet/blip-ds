import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '4fffa9d15e9ce7d7ceda82a545224c883f92eb04' }, h("slot", { key: '9b0c3c890d364fa7d86398add1023851bd96030e' })));
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
