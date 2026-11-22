import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-toast-container with UaiThemeProvider for tokenized styling.
 */
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '349d18ff85913b6b9ce98552b5155ae4dd0b5ddb' }, h("slot", { key: '3874c06ae28d6796e8628ede5a85b2ee8f96a2ba' })));
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
