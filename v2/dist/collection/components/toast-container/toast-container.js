import { h, Host } from "@stencil/core";
export class BdsToastContainer {
    render() {
        return (h(Host, { key: 'a6a99b30a2912242aada8f53adc9ce8941a63fb4' }, h("slot", { key: '1004b9a4ae6767257c2849f4848767c131a33896' })));
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
