import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-toast-container with UaiThemeProvider for tokenized styling.
 */
export class BdsToastContainer {
    render() {
        return (h(Host, { key: '1f8aa10ea330752de0f5d9e813c80e9a24cc0d1d' }, h("slot", { key: '2cee75135fcb0316352c944dd1bf3c35f480aca0' })));
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
